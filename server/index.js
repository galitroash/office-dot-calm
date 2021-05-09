const express = require('express');
const cors = require('cors');
const productRouts = require('./routs/products.js');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/products', productRouts);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, () => {
    console.log("server is running on port 3001");    
});

