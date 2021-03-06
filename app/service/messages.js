'use strict';

module.exports = app => {
  class MessageService extends app.Service {
    constructor(ctx) {
      super(ctx);
    }

    async list(params) {
      Object.assign(params, {
        mdrender: false
      })
      return await this.curl('/messages', {
        data: params,
      });
    }
  }

  return MessageService;
};
