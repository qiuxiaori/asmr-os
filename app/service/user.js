'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 创建用户
   * @param {Object} data 用户信息
   */
  async create(data) {
    return this.ctx.model.User.create(data);
  }
}

module.exports = UserService;
