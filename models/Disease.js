const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema(
    {
        name: {type: String, required: true, unique: true},
        description: {type: String, required: false}
    }
);

const Disease = mongoose.model('Disease' , diseaseSchema);
module.exports = Disease;