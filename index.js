function isUndefined(value) {
  return value === undefined;
}

module.exports = function(controler) {
  return async function (ctx, next) {
    const method = ctx.request.method.toUpperCase();
    
    if (!isUndefined(controler.preMethod)) {
      await controler.preMethod.apply(this, arguments);
    }
    let fn = controler[method];

    await fn.apply(this, arguments);

    if (!isUndefined(controler.afterMethod)) {
      await controler.afterMethod.apply(this, arguments);
    }
  }
};
