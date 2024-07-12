const express = require('express');
const router = express.Router();
const Disease = require('../models/Disease');

router.post('/', async(req, res)=>{
    try{
        const disease = new Disease(req.body);
        await disease.save();
        res.status(201).send(disease);
    }catch (error){
        res.status(400).send(error);
    }
});

router.get('/', async(req, res) =>{
    try{
        const diseases = await Disease.find();
        res.status(200).send(diseases);
    }catch(error){
        res.status(500).send(error);
    }
});

router.put('/:id', async(req,res)=>{
    try{
        const disease = await Disease.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true});

        if(!disease){
            return res.status(404).send();
        }
        res.status(200).send(disease); 
    }catch(error){
        res.status(400).send(error); 
    }
});

//Agregar el método put para actualizar un documento


module.exports = router;