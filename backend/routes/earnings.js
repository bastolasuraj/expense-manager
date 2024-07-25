const express = require('express');
const router = express.Router();

const Earning = require('../models/Earning');

router.get('/', async (req, res) => {
    try {
        const earnings = await Earning.find();
        res.json(earnings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const earning = new Earning({
        item: req.body.item,
        amount: req.body.amount
    });

    try {
        const newEarning = await earning.save();
        res.status(201).json(newEarning);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Earning.findByIdAndDelete(req.params.id);
        res.json({ message: 'Earning deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
