let express = require(`express`)
let breads = express.Router()
let Bread = require(`../models/bread.js`)
breads.get('/:arrayIndex', (req, res) => {
    res.render("show",{bread:Bread[req.params.arrayIndex]})
})
breads.delete(`/:indexArray`,(req,res) => {
breads.splice(req.params.indexArray,1)
res.status(303).redirect(`/breads`)
})


breads.get(`/`, (req, res) => {
    res.render(`index`,
    {
        breads: Bread,
        title: 'Index Page'
      } )
})
// CREATE
breads.post('/', (req, res) => {
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = 'true'
    } else {
      req.body.hasGluten = 'false'
    }
    Bread.push(req.body)
    res.send(Bread)
  })
  

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})
// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})




module.exports = breads

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex],
        index: req.params.arrayIndex 
      })
    }// else {
      //res.render('404')
   // }
  })
  
