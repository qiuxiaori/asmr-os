'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    ctx.body = await service.user.create(data);
  }
}

module.exports = UserController;
