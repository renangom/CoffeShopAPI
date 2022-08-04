const database = require('../infra/database')

exports.getCoffes = () => {
    return database.query('select * from coffe')
}

exports.getCoffe = (id) => {
    return database.query('select * from coffe where coffeId = $1', [id])
}

exports.saveCoffe = (post) => {
    return database.query(`insert into coffe (name, price, description) values ($1, $2, $3) returning *`, [post.name, post.price, post.description]) 
}

exports.removeCoffe = (id) => {
    return database.query("delete from coffe where coffeId = $1", [id])
}

exports.updateCoffe = (id, coffe) => {
    return database.query("update coffe set name = $1, price = $2, description = $3 where coffeId = $4", [coffe.name, coffe.price, coffe.description, id])
}