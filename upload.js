const express = require('express')
const multer = require('multer')
const router = express.Router()
const model = require('../model/schema')

const storage = multer.diskstorage({
	destination:function(req,res,cb){
		cb(null,'upload/')
	}
})

const upload = multer({storage:storage})
router.post('/invoice',upload.single('image'), (req,res,next)=>{
     console.log(req.file)
})