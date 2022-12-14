const { application } = require('express')
const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('listing on port', PORT)
})

app.get('*', (req, res) => {
    res.send('404')
})
