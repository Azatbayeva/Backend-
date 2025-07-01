//Get POst 
const express = require('express')
const app = express()
app.get('/', (req, res) => res.json({ message: 'Hello' }))

const PORT = 8080

console.log('Hello world')
app.get('/post', (req, res) => res.status(200).json({ message: 'Hey' }))

app.listen(PORT, () => console.log(`Listening on - http://localhost:${PORT}`))
