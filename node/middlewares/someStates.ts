export async function someStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {

  ctx.body = {}

  console.log(ctx.body)
  await next()
}
