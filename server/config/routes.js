// var mongoose = require('mongoose');
var control = require('../controllers/petController.js')();
var path = require('path');

module.exports = function(app){
    
    app.get('/api/pets', function(req, res){
        control.index(req, res);
    });
    app.get('/api/pet/:id', function(req,res){
        control.pet(req,res);
    });
    app.post('/api/pets/new', function(req,res){
        control.createPet(req,res);
    });
    app.put('/api/pets/edit/:id', function(req,res){
        control.updatePet(req,res);
    });
    app.delete('/api/pets/:id', function(req,res){
        control.deletePet(req,res);
    }); 
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });    
}