const axios = require('axios');
const crypto = require('crypto');
const { post } = require('../route/coffeRoute');
const coffeService = require('../service/coffeService')


const generate = () => {
    return crypto.randomBytes(20).toString('hex');
}

const request = (url, method, data) => {
    return axios({url, method, data, validateStatus: false})
}


test('Should get coffes', async () => {
    //dado que
    const coffe1 = await coffeService.saveCoffe({name: generate(), price: 5.0, description: generate()});
    const coffe2 = await coffeService.saveCoffe({name: generate(), price: 5.0, description: generate()});
    const coffe3 = await coffeService.saveCoffe({name: generate(), price: 5.0, description: generate()});
    //quando acontecer
    const response = await request('http://localhost:5000/api/coffe', 'get');
    expect(response.status).toBe(200);
    //então
    expect(response.data).toHaveLength(3);
    coffeService.removeCoffe(coffe1.rows[0].coffeid);
    coffeService.removeCoffe(coffe2.rows[0].coffeid);
    coffeService.removeCoffe(coffe3.rows[0].coffeid);


})

test('should save coffe', async () => {
    const data = {name: generate(), price: 5.0, description: generate()};
    const response = await request('http://localhost:5000/api/coffe', 'post', data);
    expect(response.status).toBe(201);

    const coffe = response.data

    expect(coffe.name).toBe(data.name);
    expect(coffe.description).toBe(data.description);

    await coffeService.removeCoffe(coffe.coffeid)

})