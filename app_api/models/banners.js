var mongoose = require('mongoose');

var bannerSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    buttonContent: {
        type: String,
        required: true
    }

});

mongoose.model('Banner', bannerSchema);
