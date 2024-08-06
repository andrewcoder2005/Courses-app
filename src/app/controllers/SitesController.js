const Course = require('../models/course.model');

class SitesController{
    //* [GET] /home
    index(req,res){
        const courses = Course.find({})
        .then((courses) => res.json(courses))
        .catch((err) => res.status( 400).json({error:'ERROR!!!'}))
    // res.render('home');
    }
    search(req,res){
        res.render('search');
    }
}
module.exports = new SitesController;