var express = require('express');
var router = express.Router();
var controller = require('../controllers/UserController');

router.get('/user', (req, res, next) => {  
    controller.find(req.query).then(doc => {
        if(doc.length > 0) return res.json({ 
            authenticated: true,
            token: Math.random().toString(36).substring(7)
        })
        return res.json({
            authenticated: false
        })
    });
});

router.post('/user', (req, res, next) => { 
    console.log(req.body);
    return controller.create(req.body).then(doc => res.json(doc.insertedId));
});

router.delete('/user/:id', (req, res, next) => {    
    return controller.delete(req.params.id).then(doc => res.json(doc));
});

module.exports = router;