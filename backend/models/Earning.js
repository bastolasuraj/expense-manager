const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EarningSchema = new Schema({
    item: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Earning', EarningSchema);
