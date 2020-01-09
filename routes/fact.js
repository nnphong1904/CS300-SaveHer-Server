const express = require('express')
const Router = express.Router()
const Facts = require('../modules/Facts.module')
Router.get('/', async (req, res, next) => {
  const facts = await (Facts.find())
  res.json(facts)
})
module.exports = Router
