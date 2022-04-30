//Dependencies
const express = require('express')
const { append } = require('express/lib/response')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//ROUTES
app.get('/', (req, res) =>{
    res.send('Welcome to an Awesome App about Breads!')
})

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Breads
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

//LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
})