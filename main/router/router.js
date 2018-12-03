
// 引入 router 和 fs
const Router =require('koa-router');
const fs = require('fs')

//生成一个 router 实例
const router= new Router();


router.get('/', (ctx,next)=>{
    ctx.response.body='hello world';
    next();
})
router.get('/getJson',(ctx,next)=>{    
    
    // console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url} `); //es6 模板字符串
    ctx.response.body=JSON.parse(fs.readFileSync( './static/material.json'));
    next();
})

module.exports=router
