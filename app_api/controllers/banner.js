var mongoose = require('mongoose');

var Banner = mongoose.model('Banner');

var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

/*  POST a new banner
*   /api/banners    */
module.exports.bannerCreate = function (req, res) {

    //  new banner model
    var banner = new Banner();

    banner.title = req.body.title;
    banner.description = req.body.description;
    banner.buttonContent = req.body.buttonContent;

    banner.save(function (err, banner) {
        if (err)
            sendJSONresponse(res, 400, err);
        else
            sendJSONresponse(res, 201, banner);
    });

};

/*  GET list of banner  */
module.exports.bannerGetAll = function (req, res) {
    Banner.find(function (err, banners) {
        if(err)
            sendJSONresponse(res, 400, err);
        else
            sendJSONresponse(res, 200, banners);
    });
};

/*  GET banner by ID    */
module.exports.bannerGetOne = function (req, res) {
    Banner.findById(req.params.banner_id, function (err, banner) {
       if(err)
           sendJSONresponse(res, 404, err);
       else
           sendJSONresponse(res, 200, banner);
    });
};

/*  PUT api/banners/:banner_id  */
module.exports.bannerUpdateOne = function (req, res) {
    if(!req.params.banner_id) {
        sendJSONresponse(res, 404, {"message": "banner id is required"});
        return;
    }

    Banner.findById(req.params.banner_id, function (err, banner) {
         if(!banner) {
             sendJSONresponse(res, 404, {"message": "bannerid not found"});
             return;
         }
         else if (err) {
             sendJSONresponse(res, 400, err);
             return;
         }
         banner.title = req.body.title;
         banner.description = req.body.description;
         banner.buttonContent = req.body.buttonContent;

         banner.save(function (err, banner) {
             if(err)
                 sendJSONresponse(res, 404, err);
             else
                 sendJSONresponse(res, 200, banner);
         });
    });
};

/*  DELETE a banner */
module.exports.bannerDeleteOne = function (req, res) {
    var banner_id = req.params.banner_id;

    if(banner_id) {
        Banner.findByIdAndRemove(banner_id, function (err) {
           if(err)
               sendJSONresponse(res, 404, err);
           console.log("Banner id "+banner_id+" deleted");
           sendJSONresponse(res, 204, null);
        });
    }
    else
        sendJSONresponse(res, 404, {"message": "banner not found"});
};
