'use strict';

module.exports = app => {
  class CollectService extends app.Service {
    constructor(ctx) {
      super(ctx);
    }

    async show(loginname) {
      return await this.curl(`/user/${loginname}`);
    }
  }

  return CollectService;
};
