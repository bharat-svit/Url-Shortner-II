const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shorturl')
const connectDB = require('./server/connection')
const app = express()

app.use(express.urlencoded({extended:true}))
connectDB();

app.set('view engine' , 'ejs')


app.get('/' , async (req,res)=>{
    console.log('user logged')
    const allurl = await ShortUrl.find();
    res.render('index' , {shortUrl : allurl})
})


app.post('/shrinkurl' ,async (req,res)=>{
    await ShortUrl.create({full : req.body.fullUrl})
    res.redirect('/')
    
})


app.get('/:shorturl' , async (req,res)=>{
   const sht = await ShortUrl.findOne({short: req.params.shorturl})
   if(sht == null) return res.sendStatus(404)
   sht.clicks++
   sht.save()
   res.redirect(sht.full)
})



app.listen(5000 , ()=>{
    console.log('app started')
})