const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CoursesController');

// Define the route to use the controller
router.get('/courses/create', courseController.create);
router.post('/courses/store', courseController.store);  
router.get('/:slug', courseController.show);

module.exports = router;
