const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  first_name: String,
  last_name: String,
  phone: String,
  email: String,
  point: Number
})

const User = mongoose.model('users', UserSchema, 'users')
module.exports = User
