const mongoose = require('mongoose')
const { Schema, Document } = mongoose

const newsletterSchema = new Schema({
  emailNewsletter: String
})

module.exports = mongoose.model('Newsletter', newsletterSchema)
