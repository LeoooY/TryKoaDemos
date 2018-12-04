使用koa2搭建一个web服务，给前端提供一个返回json数据的接口  
## Koa相关
- Koa基本使用
- 路由
- 中间件（同步、异步async await）
- 错误处理

## 参考
- [vue + vuex + koa2开发环境搭建及示例开发](https://segmentfault.com/a/1190000012918518])

- [koa（应该是koa2）](https://koa.bootcss.com/)
- [Koa 框架教程 阮一峰 2017.8.9](http://www.ruanyifeng.com/blog/2017/08/koa.html)
- [koa入门 廖雪峰](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001471087582981d6c0ea265bf241b59a04fa6f61d767f6000)


## 踩坑
- koa-route(阮一峰文中所用) 和 [koa-router](https://www.npmjs.com/package/koa-router)是两个不同的路由模块，用法也有些差异  
- 洋葱模型  
使用async和await的目的是保证koa组件的洋葱模型正常顺序（先进后出）。
使用同步组件时候，若组件中操作全是同步操作，还不会影响正常执行顺序（先进后出）。
但是！若是组件中出现了异步操作，则执行顺序就会被打乱了。
所以全部使用异步组件（async 和 await写法）可以保证正常的顺序  
[参考 ES6 async](http://es6.ruanyifeng.com/?search=import&x=0&y=0#docs/async)  
[参考 v2ex ](https://www.v2ex.com/amp/t/441745)





## 创建项目
生成package.json  
```
npm init -y
``` 

安装以下依赖项
```
npm i koa
npm i koa-router
npm i koa-cors
```

