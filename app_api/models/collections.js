var mongoose = require('mongoose');

var collectionSchema = mongoose.Schema({
   title: {
       type: String,
       required: true
   },

   description: {
       type: String
   },

   img: {
       type: String
   }
});

mongoose.model('Collection', collectionSchema);