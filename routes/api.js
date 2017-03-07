var express = require('express');
var router = express.Router();
var controller = require('../controllers/PollController');

router.get('/polls', (req, res, next) => {
    var resource = req.params.resource;
    
    return controller.find(req.query).then(doc => res.json(doc));
});

router.get('/polls/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    
    return controller.findById(id).then(doc => res.json(doc));
    
});

router.post('/polls', (req, res, next) => {
    var resource = req.params.resource;

    return controller.create(req.body).then(doc => res.json(doc.insertedId));
    
});

router.delete('/polls/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    
    return controller.delete(id).then(doc => res.json(doc));
    
});

module.exports = router;