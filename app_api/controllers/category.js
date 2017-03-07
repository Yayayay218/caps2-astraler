var mongoose = require('mongoose');
var Categories = mongoose.model('Categories');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.categoryCreate = function (req, res) {
    var category = new Categories();

    category.name = req.body.name;
    category.description = req.body.description;

    category.save(function (err, category) {
        if (err) {
            sendJSONresponse(res, 400, err)
        }
        sendJSONresponse(res, 201, category);
    });

};

module.exports.listAllCategory = function (req, res) {
    Categories.find(function (err, category) {
        if (err) {
            sendJSONresponse(res, 400, err);
        }
        sendJSONresponse(res, 200, {"data": category});
    });
};

