// Http methods haqida o'rganish
require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const postModel = require('./models/post.model')
const app = express()

const PORT = process.env.PORT || 8080

// so'rov olish uchun ishlatiladi 
app.get('/', async (req, res) => {
	try {
		const allPosts = await postModel.find()
		res.status(200).json(allPosts)
	} catch (error) {
		res.status(500).send(error)
	}
	//req So'rov
	//response bu javob
})

app.use(express.json())
app.post('/', async (req, res) => {
	try {
		const { title, body } = req.body
		const newPost = await postModel.create({ title, body })
		res.status(201).json(newPost)
	} catch (error) {
		res.status(500).json(error)
	}
})

app.delete('/:id', (req, res) => {
	const { id } = req.params
	res.send(id)
})

//MongoDb LInkimiz
const DB_URL = process.env.DB_URL

//Ma'lumotlar bazasiga ulanish
const bootstrap = async () => {
	try {
		await mongoose.connect(process.env.DB_URL).then(() => console.log(`Connected to Db`))
		app.listen(PORT, () =>
			console.log(`Listening on - http://localhost:${PORT}`)
		)
	} catch (error) {
		console.log(`Connecting to DB ${error}`)
	}
}
bootstrap()
