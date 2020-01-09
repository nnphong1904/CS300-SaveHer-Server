const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BinLocationShema = new Schema({
  id: Number,
  longitude: Number,
  latitude: Number
})

const BinLocation = mongoose.model('bin_location', BinLocationShema, 'bin_location')
module.exports = BinLocation
