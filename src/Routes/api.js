const express = require('express');
const router = express.Router();

// Import Controller Function 

const adminController = require('../Controllers/adminController');
const postController = require('../Controllers/postController');
const subAdminController = require('../Controllers/subAdminController');
const userController = require('../Controllers/userController');


//adminController Routes

router.get('/admin/create',adminController.create);
router.get('/admin/read',adminController.read);
router.get('/admin/delete',adminController.delete);
router.get('/admin/update',adminController.update);


//postController Routes


router.get('/post/create',postController.create);
router.get('/post/read',postController.read);
router.get('/post/delete',postController.delete);
router.get('/post/update',postController.update);


//subAadminController Routes


router.get('/subAdmin/create',subAdminController.create);
router.get('/subAdmin/read',subAdminController.read);
router.get('/subAdmin/delete',subAdminController.delete);
router.get('/subAdmin/update',subAdminController.update);



//userController Routes


router.get('/user/create',userController.create);
router.get('/user/read',userController.read);
router.get('/user/delete',userController.delete);
router.get('/user/update',userController.update);



module.exports = router;