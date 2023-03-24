// DEPENDENCIES
const express = require('express')
const methodOverride=require('method-override')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
// 404 Page
//app.get('*', (req, res) => {
// res.send('404')
//})


app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})
let breadsController = require(`./controllers/breads_controller.js`)
app.use(`/breads`,breadsController)

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })

