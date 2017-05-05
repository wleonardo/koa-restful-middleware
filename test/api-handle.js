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
