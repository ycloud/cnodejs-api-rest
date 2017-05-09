module.exports = app => {
  Object.assign(app.Service.prototype, {
    async curl(url, opts) {
      url = `${this.config.remoteUrl}${url}`;
      opts = Object.assign({
        timeout: ['30s', '30s'],
        dataType: 'json',
      }, opts);

      const result = await app.httpclient.request(url, opts);

      this.checkSuccess(result)
      return result.data.data
    },
    checkSuccess(result) {
      if (result.status !== 200) {
        const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
        this.ctx.throw(result.status, errorMsg);
      }
      if (!result.data.success) {
        this.ctx.throw(500, 'remote response error', { data: result.data });
      }
    }
  });

  app.validator.addRule('token', /^[a-z\d\-]{36}$/i);
  app.validator.addRule('mongoId', /^[a-z\d]{24}$/i);
};
