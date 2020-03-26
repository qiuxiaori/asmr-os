'use strict';

const Controller = require('egg').Controller;

class AdController extends Controller {
  async create() {
    const ctx = this.ctx;
    const params = ctx.request.body;
    ctx.body = await ctx.model.Ad.create(params);
  }

  async updateOne() {
    const ctx = this.ctx
    const _id = ctx.params._id
    const updates = ctx.query
    await ctx.model.Ad.updateOne({ _id }, updates)
    ctx.body = {}
  }

  async deleteOne() {
    const ctx = this.ctx
    const _id = ctx.params._id
    ctx.body = await ctx.model.Ad.deleteOne({ _id })
  }

  async findOne() {
    const ctx = this.ctx
    const _id = ctx.params._id
    ctx.body = await ctx.model.Ad.findOne({ _id })
  }

  async list() {
    const ctx = this.ctx
    const params = ctx.request.body
    ctx.body = await ctx.model.Ad.find(params)
  }
}

module.exports = AdController;
