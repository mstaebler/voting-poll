var express = require('express');
var router = express.Router();
var PollController = require('../controllers/PollController');

router.get('/:resource', (req, res, next) => {
    var resource = req.params.resource;
    if(resource === 'poll'){
        return PollController.find(req.query).then(doc => res.json(doc));
    }
    else{
        return res.json({
            confirmation:'success',
            resource: resource
        });
    }  
});

router.get('/:resource/:id', (req, res, next) => {
    var resource = req.params.resource;
    var id = req.params.id;
    
    if(resource === 'poll'){
        return PollController.findById(id).then(doc => res.json(doc));
    }
});

module.exports = router;