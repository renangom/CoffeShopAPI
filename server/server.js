const express = require('express');
require('dotenv').config()
const app = express()

app.use(express.json());
app.use('/', require('./route/coffeRoute'));
app.use('/', require('./route/userRoute'))
app.use('/', require('./route/authRoute'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port', process.env.PORT)
})