require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const postModel = require('./models/post.model')
// Express vs mongose yuklanishi

const app = express()
app.use(express.json())
// use methodi ishlatiladi qachonki bizda post json bilan


//get metodi yordamida xatolardan qochish
app.get('/', async (req, res) => {
	try {
		const { title, body } = req.body
		const newPost = await postModel.create({ title, body })
		res.status(201).json(newPost)
	} catch (error) {
		res.status(500).json(error)
	}
})

//get methodi

//xatolardan qochish
app.post('/', async (req, res) => {
	try {
		const { title, body } = req.body
		const newPost = await postModel.create({ title, body })
		res.status(201).json(newPost)
	} catch (error) {
		res.status(500).json(error)
	}
})
//post methodi

//post
const PORT = process.env.PORT


//bitta funksiyaga olib ishlashi!connect to mongoDb
const bootstrap = async () => {
	try {
		await mongoose.connect(process.env.DB_URL).then(() => console.log('Connect to db'))
		app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
	} catch (error) {
		console.log(`Connecting with DB ${error}`)
	}
}
bootstrap()
