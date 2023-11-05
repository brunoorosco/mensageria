import express from 'express'

const users = require('./router/users')
const addresses = require('./router/addresses')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const sensors = [
	{
		id: 1234,
		name: 'DHT22',
		type: 'temperature',
		value: 25,
	},
	{
		id: 4321,
		name: 'DHT11',
		type: 'temperature',
		value: 25,
	},
]

app.post('/sensors', (req, res) => {
	const sensor = {
		id: req.body.id,
		name: req.body.name,
		type: req.body.type,
		value: req.body.value,
	}
	sensors.push(sensor)

	res.json(sensor)
})
app.get('/sensors', (req, res) => res.json(sensors))

app.get('/sensors/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const sensor = sensors.filter(item => item.id === id)

	if (sensor.length <= 0) {
		return res.json({})
	}
	return res.json(sensor[0])
})
//rotas
app.use('/users', users)
app.use('/addresses', addresses)

app.listen(3000, () => {
	console.log('rodando servidor')
})
