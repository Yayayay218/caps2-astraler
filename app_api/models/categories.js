var mongoose = require('mongoose');

var subCateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    } ,
    description: String
});

var categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    subCategories: [subCateSchema]
});



mongoose.model('Categories', categoriesSchema);