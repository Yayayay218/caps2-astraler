var mongoose = require('mongoose');

var categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

mongoose.model('Categories', categoriesSchema);