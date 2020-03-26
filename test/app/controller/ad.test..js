'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/ad.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should POST /users', () => {
    const result = app.httpRequest()
      .post('/ads')
      .send({
        title: '测试ad',
      })
      .expect(200);
    assert(result.status === 200);
    assert(result.data.title === '测试ad');
  });
});
