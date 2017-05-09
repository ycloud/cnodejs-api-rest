'use strict';

module.exports = {
  async index() {
    this.validate({
      accesstoken: { type: 'token', required: true }
    }, this.query);

    this.body = await this.service.messages.list({
      accesstoken: this.query.accesstoken
    });
  }
};
