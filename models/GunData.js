const mongoose = require('mongoose');

const gunSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    country: String,
    firerate: String,
    ammo: String,
    price: Number,
    capacity: Number,
    photo: String
});

const Gun = mongoose.model('guns', gunSchema);

module.exports = Gun;
