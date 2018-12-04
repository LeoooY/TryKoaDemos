
const Koa = require('koa');
const app = new Koa();
const main =require('./testAsyncMiddleware.js');


app.use(main);
app.listen(3001);