### koa-restful-middleware
![](https://img.shields.io/badge/node-%3E%3D7-brightgreen.svg)
![](https://img.shields.io/badge/koa-%3E2.0-blue.svg)

#### usage

server.js

```
const koa = require('koa');
const app  = new koa();
const Router = require('koa-router');
const router = new Router();
const restful = require('koa-restful-middleware');

router.get('/', restful(require('./api-handle.js')));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
```

api-handle.js

```
exports.GET = async function (ctx, next) {
  console.log('GET');
  ctx.body = 'GET';
};

exports.POST = async function () {
  console.log('POST');
  ctx.body = 'POST';
};

exports.PATCH = async function () {
  console.log('PATCH');
  ctx.body = 'PATCH';
};

exports.DELETE = async function () {
  console.log('DELETE');
  ctx.body = 'DELETE';
};

```
