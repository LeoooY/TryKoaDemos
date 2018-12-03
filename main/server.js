const Koa=require('koa');
const app=new Koa();
const Router =require('koa-router');
const router= new Router();
const fs = require('fs')

// const main = ctx =>{    
//     ctx.response.body="Hello world";
// };

// app.use(router.get('/',main));
router.get('/', ctx=>{
    ctx.response.body='hello world';
})
router.get('/getJson',ctx=>{
    ctx.response.body=JSON.parse(fs.readFileSync( './static/material.json'));;
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);