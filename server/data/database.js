const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/officeCalmDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connected to mongoDB');
    });
    
