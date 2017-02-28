var express = require('express');
var router = express.Router();
var controllers = require('../controllers');

router.get('/:resource', (req, res, next) => {
    var resource = req.params.resource;
    var controller = controllers[resource];
    console.log('controller is: ',controller);

    if(controller === null){
        console.log({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });
    }

    return controller.find(req.query).then(doc => res.json(doc));
});

router.get('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource];

    if(controller === null){
        console.log({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });
    }
    
    return controller.findById(id).then(doc => res.json(doc));
    
});

router.post('/:resource', (req, res, next) => {
    var resource = req.params.resource;
    var controller = controllers[resource];

    if(controller === null){
        console.log({
            confirmation: 'fail',
            message: 'Invalid resource request: ' + resource
        });
    }

    return controller.create(req.body).then(doc => res.json(doc.insertedId));
    
});

module.exports = router;