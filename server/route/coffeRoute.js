const express = require('express');
const router = express.Router();
const coffeService = require('../service/coffeService')
const verifyToken = require('../utils/functions')

router.get('/api/coffe', async (req, res) => {
    const coffes = await coffeService.getCoffes();
    res.status(200).json(coffes.rows)
})

router.get('/api/coffe/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const coffe = await coffeService.getCoffe(id)
        res.status(200).json(coffe.rows[0]);
    }catch(err){
        res.status(404).end()
    }
})

router.post('/api/coffe', verifyToken.verifyToken, async (req,res) => {
    try{
        const post = req.body
        const postCreated = await coffeService.saveCoffe(post);
        res.status(201).json(postCreated.rows[0])

    }catch(err){
        res.status(204).json('Nenhum conteúdo enviado')
    }
})

router.delete('/api/coffe/:id', verifyToken.verifyToken , async (req, res) => {
    try{
        const id = req.params.id;
        await coffeService.removeCoffe(id);

        res.status(200).json('deletado com sucesso!')
    }catch(err){

    }
})

router.put('/api/coffe/:id',verifyToken.verifyToken , async (req, res) => {
    const coffe = req.body
    const id = req.params.id;
    console.log(id)
    try{
        await coffeService.updateCoffe(id, coffe);
        res.status(204).json("Updated with success")

    }catch(err){
        res.status(404).json("Não encontrado")
    }
})


module.exports = router