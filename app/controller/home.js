'use strict';

module.exports = {
  async index() {
    this.body = `
    <style>
      p>span:first-child{display:inline-block;width:400px;}
      p>span:first-child+span{margin-right:20px;}
    </style>
    <h1>cnodejs restful api share.la</h1>
    <p><span>GET https://share.la/cnodejs/topics</span> <span>=></span>GET  https://cnodejs.org/api/v1/topics</p>
    <p><span>GET https://share.la/cnodejs/topics/:id</span> <span>=></span>GET  https://cnodejs.org/api/v1/topic/:id</p>
    <p><span>GET https://share.la/cnodejs/collects/:loginname</span> <span>=></span>GET  https://cnodejs.org/api/v1/topic_collect/:loginname</p>
    <p><span>GET https://share.la/cnodejs/users/:loginname</span> <span>=></span>GET  https://cnodejs.org/api/v1/user/:loginname</p>
    <p><span>GET https://share.la/cnodejs/messages</span> <span>=></span>GET  https://cnodejs.org/api/v1/messages</p>
    `;
  }
};
