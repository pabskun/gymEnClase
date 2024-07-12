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


module.exports = router;