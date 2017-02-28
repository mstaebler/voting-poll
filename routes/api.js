var express = require('express');
var router = express.Router();

router.get('/:resource', (res, req, next){
    res.json({
        confirmation:'success',
        resource: req.params.resource
    });
});