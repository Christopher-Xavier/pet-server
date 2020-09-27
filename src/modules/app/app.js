const express = require('express')
const cors = require('cors')
const { CLIENT_ORIGIN } = require('../../config')
const app = express()

app.use(
	cors({
		origin: CLIENT_ORIGIN,
	})
)

app.use('/api/people', require('../people/people.router'))
app.use('/api/pets', require('../pets/pets.router'))

app.get('/hello', (req, res) => {
res.status(200).send('Hello')
})

module.exports = app
