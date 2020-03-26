'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // users
  router.post('/users', controller.user.register);

  // ads
  router.post('/ads', controller.ad.create)
  router.put('/ads/:_id', controller.ad.updateOne)
  router.get('/ads/:_id', controller.ad.findOne)
  router.delete('/ads/:_id', controller.ad.deleteOne)
  router.get('/ads', controller.ad.list)
};
