module.exports = () => {
  return async function(ctx, next) {
    try {
      await next();
    } catch (err) {
      const app = ctx.app
      const status = err.status || 500;
      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message;
      app.emit('error', err, app);
      ctx.body = { error };
      if (status === 422) ctx.body.detail = err.errors;
      ctx.status = status;
    }
  };
};
