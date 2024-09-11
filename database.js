const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
//mongoose.connect('mongodb://junction.proxy.rlwy.net:17976', {
mongoose.connect('mongodb+srv://danieljm1085:djm@clusterapp.fjnwi.mongodb.net/', {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useFindAndModify: false

})
    .then(db => console.log('BD conectada'))
    .catch(err => console.error(err));