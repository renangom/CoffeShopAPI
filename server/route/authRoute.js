const router = require('express').Router();
const jwt = require('jsonwebtoken');
const userService = require('../service/userService');

router.post('/api/login', async (req, res) => {
    const {username, password} = req.body
    const user = await userService.getUserByNamePassword(username, password);

    if(user) {
        const acessToken = jwt.sign({id: user.userid, isAdmin: user.isadmin}, 'secretKey', {expiresIn: "20m"})
        res.json({
            username: user.name,
            isAdmin: user.isadmin,
            acessToken
        })
    }else{
        res.status(400).json('Wrong username or password')
    }

    res.json('Tudo okay')
})

module.exports = router