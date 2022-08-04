const userData = require('../data/userData')

exports.getUsers = () => {
    return userData.getUsers();
}

exports.getUser = async (id) => {
    const dadoUser = await userData.getUser(id)
    const user = dadoUser.rows[0]
    return user
}

exports.getUserByNamePassword = async (username, password) => {
    const dadoUser = await userData.getUserByNamePassword(username, password);
    const user = dadoUser.rows[0]
    return user
}