'use strict';

module.exports = {
  async show() {
    this.validate({
      id : { type: 'string', required: true }
    }, this.params);

    this.body = await this.service.collects.list(this.params.id);
  }
};
