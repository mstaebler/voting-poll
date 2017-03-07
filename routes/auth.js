var express = require('express');
var router = express.Router();
var controller = require('../controllers/UserController');

router.get('/user', (req, res, next) => {  
    return controller.find(req.query).then(doc => res.json(doc));
});

router.post('/user', (req, res, next) => { 
    console.log(req.body);
    return controller.create(req.body).then(doc => res.json(doc.insertedId));
});

router.delete('/user/:id', (req, res, next) => {    
    return controller.delete(req.params.id).then(doc => res.json(doc));
});

module.exports = router;