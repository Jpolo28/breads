// require mongoose
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor
const { Schema } = mongoose
// schema
const breadSchema = new Schema({
  //we will write our schema here
  name: { type: String, required: true },
  hasGluten: { type: Boolean },
  image: { type: String, default: 'http://placehold.it/500x500.png' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})
// helper methods
breadSchema.methods.getBakery = function (){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}
// model and export
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread
