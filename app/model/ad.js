'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const AdSchema = new Schema({
    title: String,
    url: String,
    cover: String,
    startAt: Date,
    endAt: Date,
    level: Number,
    company: String,
    price: Number,
    state: { type: String, enum: [ 'normal', 'closed' ] },
  });

  return mongoose.model('Ad', AdSchema, 'ads');
};
