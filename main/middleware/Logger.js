//该中间件 用于输出请求的 时间、方法、路径
const logger=async ( ctx, next)=>{
    console.log(`>> ${Date.now()}  ${ctx.request.method} ${ctx.request.url}`)
    await next();
    console.log(`<< ${Date.now()}  ${ctx.request.method} ${ctx.request.url}`)
}

module.exports=logger;

