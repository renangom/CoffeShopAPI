const database = require('../infra/database')


exports.getUsers = () => {
    return database.query('select * from usuario');
}

exports.getUser = (id) => {
    return database.query('select * from usuario where userId = $1', [id])
}

exports.getUserByNamePassword = (username, password) => {
    return database.query('select * from usuario where name = $1 AND password = $2', [username, password])
}