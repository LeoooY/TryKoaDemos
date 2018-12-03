// 异步中间件

// 异步读取文件操作

const fs = require('fs');

const asyncFs = async (ctx , next) =>{
    ctx.response.type='html';
    ctx.response.body= await fs.readFile('./static/index.html','utf8');
    next();
    console.log('Async Middleware');
}

module.exports=asyncFs;