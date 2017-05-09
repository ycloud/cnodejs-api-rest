'use strict';

module.exports = app => {
  class TopicService extends app.Service {
    constructor(ctx) {
      super(ctx);
    }

    async list(params) {
      Object.assign(params, {
        mdrender: false
      })
      return await this.curl('/topics', {
        data: params,
      });
    }

    async show(params) {
      console.log(params)
      return await this.curl(`/topic/${params.id}`, {
        data: {
          mdrender: false,
          accesstoken: params.accesstoken
        }
      });
    }
  }

  return TopicService;
};
