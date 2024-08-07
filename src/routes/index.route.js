const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const courseRouter = require('./courses.route');
function route(app) {
    app.use('/news',newsRouter);
    app.use('/',siteRouter);
    app.use('/',courseRouter);

}

module.exports = route;
