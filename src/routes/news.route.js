const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

// Define the route to use the controller
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;
