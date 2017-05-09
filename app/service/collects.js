'use strict';

module.exports = app => {
  class CollectService extends app.Service {
    constructor(ctx) {
      super(ctx);
    }

    async list(loginname) {
      return await this.curl(`/topic_collect/${loginname}`);
    }
  }

  return CollectService;
};
