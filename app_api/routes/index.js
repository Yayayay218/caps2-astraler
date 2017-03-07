var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

// var ctrlMyAccount = require('../controllers/myAccount');
var ctrlAuth = require('../controllers/authentication');
var ctrlBanner = require('../controllers/banner');
var ctrlCate = require('../controllers/category');

// my account
// router.get('/profile', auth, ctrlAuth.secureLogged);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// banner
router.get('/banners', ctrlBanner.bannerGetAll);
router.get('/banners/:banner_id', ctrlBanner.bannerGetOne);
router.post('/banners', ctrlBanner.bannerCreate);
router.put('/banners/:banner_id', ctrlBanner.bannerUpdateOne);
router.delete('/banners/:banner_id', ctrlBanner.bannerDeleteOne);

//  category
router.get('/categories', ctrlCate.listAllCategory);

module.exports = router;