require('../data/database.js');
const express =require('express');
const productModel = require('../models/product.js');
const router = express.Router();

router.get('/all', (req, res) => {
    productModel.find({}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })

});

router.get('/:category', (req, res) => {
    if (req.params.category){
    productModel.find({category: req.params.category}, (err, documents) => {
        err ? res.status(500).send('error') : res.status(200).send(documents);
    })}
});


router.post('/addNew', (req, res) => {
    // TODO : VALIDATION
    const product = new productModel(req.body);
    product.save().then(() => res.send("success"));
});

router.put('/update', (req, res) => {
    productModel.findOneAndUpdate({ id: req.body.id }, { $set: req.body },
        (err, doc) => {
            err ? res.status(500).send(err) : res.status(200).send('updated!')
        }
    )
});

router.delete('/', (req, res) => {
    productModel.findOneAndDelete({ id: req.body.id }, (err) => {
        err ? res.status(500).send(err) : res.status(200).send('deleted!')
    })
});

module.exports = router;