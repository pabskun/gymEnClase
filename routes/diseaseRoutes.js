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


module.exports = router;