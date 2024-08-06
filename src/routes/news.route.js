const express = require('express');
const router = express.Router();
const newsController = require('../app/controllers/NewsController');

// Define the route to use the controller
router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
