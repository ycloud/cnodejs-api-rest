'use strict';

module.exports = {
  async index() {
    this.validate({
      limit: { type: 'id', required: false },
      page: { type: 'id', required: false },
      tab: { type: 'enum', values: ['ask', 'share', 'job', 'good'], required: false }
    }, this.query);

    this.body = await this.service.topics.list({
      limit: this.query.limit,
      page: this.query.page,
      tab: this.query.tab
    });
  },
  async show() {
    this.validate({
      accesstoken: { type: 'mongoId', required: false }
    }, this.query);
    this.validate({
      id: { type: 'mongoId', required: true }
    }, this.params);

    this.body = await this.service.topics.show({
      accesstoken: this.query.accesstoken || '',
      id: this.params.id
    })
  }
};
