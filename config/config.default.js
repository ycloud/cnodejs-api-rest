'use strict';

module.exports = appInfo => {
  const config = {
    middleware: ['errorHandler'],
    remoteUrl: 'https://cnodejs.org/api/v1',
    siteFile: null
  };

  // should change to your own
  config.keys = appInfo.name + '_1494318739559_577';

  return config;
};
