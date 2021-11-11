const mongoose = require('mongoose');
const PlaceSchema = new mongoose.Schema({
    address:
        {
            type:String,
            required:[true,'Please add an address']
        },
    createdAt:
        {
            type: Date,
            default: Date.now()
        }
});

module.exports = mongoose.model('Place',PlaceSchema);