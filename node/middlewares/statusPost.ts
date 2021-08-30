import { json } from "express"
export async function statusPost(ctx: Context, next: () => Promise<any>) {
  try {
    const body = await json(ctx.req)
    console.log(body)
    const result = await ctx.clients.oms.order('Ordem de pedido')
    console.log(result)
    const teste = await ctx.clients.masterdata.searchDocuments({ dataEntity: 'CL', where: `document=${result.clientProfileData.document}`, fields: ['email'], pagination: {pageSize: 1, page: 1} })

    console.log(teste)
    ctx.body = 'OK'
    ctx.status = 200
    ctx.set('Cache-Control', 'no-cache no-store')
    await next()
  }

  catch (error) {
    console.log(error)
    ctx.status = 400
    ctx.set('Cache-Control', 'no-cache no-store')
    await next()
  }
}

