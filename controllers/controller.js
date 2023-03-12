let express=require(`express`)
let breads=express.Router()

breads.get(`/`,(req,res)=>{
    res.send(`this is the index at /bread`)
})
module.exports= breads
