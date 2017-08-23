'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/querystring', 'querystring.index');
  app.get('/querystring/stringify','querystring.stringify')
  app.get('/querystring/unescape','querystring.unescape')
  app.get('/querystring/escape','querystring.escape')
};
