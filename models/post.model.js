const { Schema, model } = require('mongoose')

consgit t postSchema = new Schema({
	title: { type: String, require: true },
	body: { type: String, require: true },
})
module.exports = model('Post', postSchema)
