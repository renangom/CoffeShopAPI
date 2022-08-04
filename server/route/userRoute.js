const router = require('express').Router()
const userService = require('../service/userService')
const verifyToken = require('../utils/functions')

router.get('/api/users', verifyToken.verifyToken , async (req,res) => {
    const users = await userService.getUsers();
    res.status(200).json(users.rows)
})

router.get('/api/users/:id',verifyToken.verifyToken , async (req,res) => {
    const id = req.params.id;
    try{
        const user = await userService.getUser(id)
        res.status(200).json(user)
    }catch(err){
    }
})


module.exports = router
