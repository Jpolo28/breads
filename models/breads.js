// require mongoose
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor
const { Schema } = mongoose
// schema
const breadSchema = new Schema({
  //we will write our schema here
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: { type: String, default: 'http://placehold.it/500x500.png' }
})
// model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
