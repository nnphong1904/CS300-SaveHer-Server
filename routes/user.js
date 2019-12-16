const express = require('express')
const Router = express.Router()
const User = require('../modules/User.module')
Router.get('/', async (req, res, next) => {
  const users = await (User.find())
  res.json(users)
})

module.exports = Router
