import { UserinputError } from '@vtex/api'

export async function status(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params },
    },
  } = ctx

  console.info('Received params:', params)

  const { code } = params
  if (!code) {
    throw new UserinputError('Code is required') // Erro 400 HTTP
  }

  const codeNumber = parseInt(code as string, 10)

  const res = await ctx.clients.status.getStatus(codeNumber).catch((reason) => {
    return reason?.response?.data
  })

  ctx.set('Cache-Control', 'no-cache no-store')
  ctx.body = res
  ctx.status = codeNumber

  await next()
}
