class NewsController{
    //* [GET] /news
index(req,res){
        res.render('news');
    }
show(req,res){
        res.send('NEWS DETAILS!')
    }
}
//* [GET] /news/:slug ( slug: the last part of the URL address that serves as a unique identifier of the page)
module.exports = new NewsController;