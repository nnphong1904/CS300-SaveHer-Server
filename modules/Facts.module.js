const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FactShema = new Schema({
  id: Number,
  fact: String
})

const Fact = mongoose.model('facts', FactShema, 'facts')
module.exports = Fact
