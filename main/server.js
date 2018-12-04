const Koa=require('koa');
const app=new Koa();


//导入自己写的logger中间件
const logger =require('./middleware/Logger');

// Es6导入 原生Node暂无法完美支持
// import {one , two , three} from './middleware/MiddleStack.mjs';
// commonJS导入中间件
const {one,two,three}=require('./middleware/MiddleStack')

// 导入异步中间件
const asyncMidware=require('./middleware/AsyncMiddle')

//导入自己封装的 router
const router = require('./router/router')






// const main = ctx =>{    
//     ctx.response.body="Hello world";
// };




// 启用中间件

// app.use(router.routes()).use(router.allowedMethods());
app.use(asyncMidware);
app.use(logger);
app.use(one);
// app.use(two);
// app.use(three);


app.listen(3000);
console.log('server starts running');

