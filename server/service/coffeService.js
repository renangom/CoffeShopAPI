const coffeData = require('../data/coffeData')

exports.getCoffes = () => {
    return coffeData.getCoffes();
}

exports.getCoffe = (id) => {
    return coffeData.getCoffe(id);
}

exports.saveCoffe = (post) => {
    return coffeData.saveCoffe(post);
}

exports.updateCoffe = async (id, coffe) => {
    await coffeData.getCoffe(id)
    return coffeData.updateCoffe(id, coffe)
}

exports.removeCoffe = (id) => {
    return coffeData.removeCoffe(id)
}