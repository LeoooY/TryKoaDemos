//该中间件 用于输出请求的 时间、方法、路径
const logger=( ctx, next)=>{
    console.log(` ${Date.now()}  ${ctx.request.method} ${ctx.request.url}`)
    next();
}

module.exports=logger;

