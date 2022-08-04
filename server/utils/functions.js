const jwt = require('jsonwebtoken')


const verifyToken = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];

        jwt.verify(token, 'secretKey', (err,user) => {
            if(err){
                return res.status(403).json('token não é válido');
            }

            req.user = user
            next();
        })
    }else{
        res.status(401).json('Você não está autenticado')
    }
}

module.exports = {
    verifyToken
}