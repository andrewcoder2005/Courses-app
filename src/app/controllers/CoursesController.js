const { default: mongoose } = require('mongoose');
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
    //* [GET] /courses/create ( this GET method is to create the U/I of the create course page)
    create(req,res,next){
        res.render('courses/create');
    }
    //* [POST] /courses/store (this POST method is to store the course to the database) 
    store(req,res,next){
        // res.json(req.body); 
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(()=>{
                res.redirect('/')
            })
            .catch(erorr=>{
                
            })
    }
}
//* [GET] /news/:slug ( slug: the last part of the URL address that serves as a unique identifier of the page)
module.exports = new CoursesController;