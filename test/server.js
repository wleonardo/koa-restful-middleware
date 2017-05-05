const koa = require('koa');
const app  = new koa();
const Router = require('koa-router');
const router = new Router();
const restful = require('../index.js');

router.get('/', restful(require('./api-handle.js')));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
