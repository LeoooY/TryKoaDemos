const fs = require('fs.promised');

const main = async function (ctx, next) {
    ctx.response.type = 'html';
    ctx.response.body = await fs.readFile('./static/index.html', 'utf8');
    next();
    console.log('End async')
  };

  module.exports=main;