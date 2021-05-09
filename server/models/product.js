const mongoose =require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    picSrc: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});
module.exports = mongoose.model('Product', productSchema);
