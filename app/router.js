'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.resources('topics', '/topics', 'topics');
  app.resources('collects', '/collects', 'collects');
  app.resources('users', '/users', 'users');
  app.resources('messages', '/messages', 'messages');
};
