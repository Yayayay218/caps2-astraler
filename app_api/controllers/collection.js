var mongoose = require('mongoose');
var multer = require('multer');
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './app_client/src/main/assets');
    },
    filename: function (req, file, callback) {
        callback(null,Date.now()+file.originalname);
    }
});

var upload = multer({storage : storage}).single('upload_file');

var Collection = mongoose.model('Collection');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/*  POST a new collection
 *   /api/collections    */
module.exports.collectionCreate = function (req, res) {

    //  new collection model
    var collection = new CollectGarbage();

    collection.title = req.body.title;
    collection.description = req.body.description;


    collection.save(function (err, collection) {
        if (err)
            sendJSONresponse(res, 400, err);
        else
            sendJSONresponse(res, 201, collection);
    });

};

/*  GET list of collection  */
module.exports.collectionGetAll = function (req, res) {
    Collection.find(function (err, collections) {
        if(err)
            sendJSONresponse(res, 400, err);
        else
            sendJSONresponse(res, 200, collections);
    });
};

/*  GET collection by ID    */
module.exports.collectionGetOne = function (req, res) {
    Collection.findById(req.params.collection_id, function (err, collection) {
        if(err)
            sendJSONresponse(res, 404, err);
        else
            sendJSONresponse(res, 200, collection);
    });
};

/*  PUT api/collections/:collection_id  */
module.exports.collectionUpdateOne = function (req, res) {
    if(!req.params.collection_id) {
        sendJSONresponse(res, 404, {"message": "collection id is required"});
        return;
    }

    Collection.findById(req.params.collection_id, function (err, collection) {
        if(!collection) {
            sendJSONresponse(res, 404, {"message": "collectionid not found"});
            return;
        }
        else if (err) {
            sendJSONresponse(res, 400, err);
            return;
        }
        collection.title = req.body.title;
        collection.description = req.body.description;
        collection.buttonContent = req.body.buttonContent;

        collection.save(function (err, collection) {
            if(err)
                sendJSONresponse(res, 404, err);
            else
                sendJSONresponse(res, 200, collection);
        });
    });
};

/*  DELETE a collection */
module.exports.collectionDeleteOne = function (req, res) {
    var collection_id = req.params.collection_id;

    if(collection_id) {
        collection.findByIdAndRemove(collection_id, function (err) {
            if(err)
                sendJSONresponse(res, 404, err);
            console.log("collection id "+collection_id+" deleted");
            sendJSONresponse(res, 204, null);
        });
    }
    else
        sendJSONresponse(res, 404, {"message": "collection not found"});
};
