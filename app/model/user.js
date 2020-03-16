'use strict'

module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema

  const UserSchema = new Schema({
    name: String,
    account: String,
    password: String,
    phone: String,
    email: String
  })

  return mongoose.model('User', UserSchema, 'users')
}
