const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    stock: String,
    userId: String
});

module.exports = mongoose.model('Stock', StockSchema);