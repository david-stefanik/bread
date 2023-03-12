let express = require(`express`)
let breads = express.Router()
let Bread = require(`../models/bread.js`)
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})

breads.get(`/`, (req, res) => {
    res.send(Bread)
})



module.exports = breads
// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
})
