var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', (req, res, next) => {
    var resource = req.params.resource;
    var controller = controllers[resource];
    
    if(controller === undefined){
        return res.json({
            message: "404 resource not found"
        });
    }

    return controller.find(req.query).then(doc => res.json(doc));
});

router.get('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if(controller === undefined){
        return res.json({
            message: "404 resource not found"
        });
    }
    
    return controller.findById(id).then(doc => res.json(doc));
    
});

router.post('/:resource', (req, res, next) => {
    var resource = req.params.resource;
    var controller = controllers[resource];

    if(controller === undefined){
        return res.json({
            message: "404 resource not found"
        });
    }

    return controller.create(req.body).then(doc => res.json(doc.insertedId));
    
});

router.delete('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if(controller === undefined){
        return res.json({
            message: "404 resource not found"
        });
    }
    
    return controller.delete(id).then(doc => res.json(doc));
    
});

module.exports = router;