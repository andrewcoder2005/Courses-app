const Course = require('../models/course.model') 
class CoursesController{
    //* [GET] /courses/:slug
    show(req,res,next){
        Course.findOne({slug: req.params.slug}).lean()
        .then(course => {
            res.render('courses/show', {course})
        })
        .catch(next);
    }
}
//* [GET] /news/:slug ( slug: the last part of the URL address that serves as a unique identifier of the page)
module.exports = new CoursesController;