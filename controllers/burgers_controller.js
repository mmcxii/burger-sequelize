const express = require('express');
const path = require('path');
const { Burger } = require('../models');

const router = express.Router();

//* Set Static
const static = express.static(path.join(path.dirname(require.main.filename), '/public'));

//* Page Route
router.get('/', (req, res) => {
    Burger.findAll({}).then((data) => res.status(200).render('burgerlist', { burgers: data }));
});

//* API Routes

// Get all burgers
router.get('/api/burgers', (req, res) => {
    Burger.findAll({}).then((data) => res.status(200).json(data));
});

// Add new burger
router.post('/api/burgers', ({ body: { name } }, res) => {
    Burger.create({ name }).then(() => res.sendStatus(204));
});

// Mark burger as devoured
router.put('/api/burgers', ({ body: { id } }, res) => {
    Burger.findOne({
        where: { id },
    })
        .then((data) => data.update({ devoured: 1 }))
        .then(() => res.sendStatus(204));
});

module.exports = { router, static };
