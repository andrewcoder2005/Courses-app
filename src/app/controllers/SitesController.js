const Course = require('../models/course.model');

class SitesController{
    //* [GET] /home
    index(req,res,next){
        Course.find({}).lean()
        .then(courses => res.render('home',{courses}))
        .catch(next);
    // res.render('home');
    }

    search(req,res){
        res.render('search');
    }
}
module.exports = new SitesController;