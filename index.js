const express = require('express')
const nodemon = require('nodemon')
const mongoose = require('mongoose')
const mongodb = require('mongodb')

const url = 'mongodb://localhost/dispatch'
mongoose.connect(url , {useNewUrlParser:true})
const con = mongoose.connection
con.on('open',function(){
	console.log("we are connected..")
})

const app = express()
app.use(express.json())

const port = 2000
app.listen(port,(req,res)=>{
	console.log("we are live" +port)
})

const po = require('./route/upload')
app.use('/',po)