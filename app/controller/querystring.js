'use strict';
const querystring = require('querystring');

module.exports = app => {
  class QuerystringController extends app.Controller {
    /**
     * querystring.parse 把url字符串转换成对象
     * 
     * @memberof QuerystringController
     */
    * index() {
      const strParams = 'foo=bar&abc=xyz&abc=123';
      const result = querystring.parse(strParams);
      this.ctx.body = result;
    }

    /**
     * querystring.stringify 把对象转换成url字符串
     */
    * stringify(){
      const obj={ foo: 'bar', baz: ['qux', 'quux'], corge: '' }
      const result=querystring.stringify(obj)
      this.ctx.body=result
    }

    /**
     * querystring.unescape 把URL字符进行解码
     */
    * unescape(){
      const strParams='q=%E4%B8%AD%E6%96%87&oq=%E4%B8%AD%E6%96%87&aqs=chrome..69i57j69i61l3j69i65l2.5370j0j1&sourceid=chrome&ie=UTF-8';
      const result=querystring.unescape(strParams);
      this.ctx.body=result
    }

    /**
     * querystring.escape 把URL字符串进行编码
     */
    * escape(){
      console.log('escape')
      const strParams='q=中文&oq=中文&aqs=chrome..69i57j69i61l3j69i65l2.5370j0j1&sourceid=chrome&ie=UTF-8'
      const result=querystring.escape(strParams);
      this.ctx.body=result
    }
  }
  return QuerystringController;
}
;
