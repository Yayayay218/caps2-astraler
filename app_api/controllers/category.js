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

module.exports.subCateCreate = function (req, res) {

    if (req.params.cateId) {
        Categories
            .findById(req.params.cateId)
            .select('subCategories')
            .exec(
                function (err, category) {
                    if (err) {
                        sendJSONresponse(res, 400, err);
                    } else {
                        doAddSubCate(req, res, category);
                    }
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "Not found, cateid required"
        });
    }

};

var doAddSubCate = function (req, res, category) {
    if (!category)
        sendJSONresponse(res, 404, "category not found");
    else {
        category.subCategories.push({
            name: req.body.name,
            description: req.body.description
        });

        category.save(function (err, category) {
            if (err)
                sendJSONresponse(res, 400, err);
            sendJSONresponse(res, 201, category);
        });
    }
};
