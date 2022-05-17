//Dependencies
const express = require('express')
const { append } = require('express/lib/response')
const mongoose = require('mongoose')


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
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI)}
    )
//Breads
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

// DEPENDENCIES
const methodOverride = require('method-override')

//MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

//404 Page
app.get('*', (req, res) => {
    res.send('404')
})

//LISTEN
app.listen(PORT, () => {
    console.log('nomming at port', PORT)
})