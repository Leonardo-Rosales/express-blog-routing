const express = require('express')
const router = express.Router()

// index

router.get('/', (req, res) => {
    res.send('Lista dei post')
})

// show

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id)
    res.send(`ecco il post con id: ${id}`)
})

// store

router.post('/', (req, res) => {
	res.send('Creo un nuovo post.')
})

// update

router.put('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Aggiorno il post con id: ${id}`)
})

// modify

router.patch('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Modifico il post con id: ${id}`)
})

// destroy

router.delete('/:id', (req, res) => {
	const id = req.params.id
	res.send(`Elimino il post con id: ${id}`)
})

module.exports = router
