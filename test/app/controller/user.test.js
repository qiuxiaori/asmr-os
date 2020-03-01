'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
  it('should assert', () => {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it.only('should POST /users', () => {
    const result = app.httpRequest()
      .post('/users')
      .send({
        name: 'qxr',
      })
      .expect(200);
    assert(result.status === 200);
  });
});
