const mongoose = require('mongoose');
async function connectDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/test_education_dev');
        console.log('The database has connected succesfully'); 
    }catch (error) {
        console.log('The database has failed to connected ');
        
    };
}
module.exports = {connectDB};