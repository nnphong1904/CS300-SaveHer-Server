const express = require('express')
const Router = express.Router()
const BinLocation = require('../modules/Bin_location.module')
Router.get('/', async (req, res, next) => {
  const BinLocationData = await (BinLocation.find())
  res.json(BinLocationData)
})
module.exports = Router
