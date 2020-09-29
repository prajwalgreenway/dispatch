const express = require('express')
 require('dotenv/config')
const multer = require('multer')
const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken')
const router = express.Router()

const model = require('../model/schema')
const TRUCK = require('../model/truck')
const login = require('../model/login')
const user = require('../model/signup')
const path = require('path');

const storage = multer.diskStorage({
	destination:function(req,res,cb){
		cb(null,'./upload/')

	},
	filename: function(req, files, cb){
    cb(null,files.fieldname + '-' + Date.now() +path.extname(files.originalname));
  } 
})

const upload = multer({storage:storage})

const photo = upload.fields([{name : 'registration_copy' , maxCount:1} , 
	{name:'driver_license', maxCount:1}])



router.post('/truck' ,photo, async(req,res)=>{
	const truck1 = new TRUCK({
		truck_number             :     req.body.truck_number,
		driver_name              :     req.body.driver_name,
		contact_number           :     req.body.contact_number,
		alternate_contact_number :     req.body.alternate_contact_number,
		logistic_partner_name    :     req.body.logistic_partner_name,
		driver_license           :     req.files.path,
		registration_copy        :     req.files.path,
		eway_bill_number         :     req.body.eway_bill_number,
		additional_information   :     req.body.additional_information
	})
	try{
		const truck2 = await truck1.save()
		res.json(truck2)
	}
	catch(err)
	{
		res.json('errror')
	}
})
router.get('/d', async(req,res)=>{
	try{
	const j1 = await TRUCK.find()
	res.json(j1)
}
catch(err)
{
	res.json('errr')
}
})


router.post('/user',async(req,res)=>{
	
	const aj = new user({
		firstname      :      req.body.firstname,
		lastname        :      req.body.lastname,
		mobilenumber     :      req.body.mobilenumber,
		 password       :      req.body.password,
		confirmpassword :      req.body.confirmpassword
		
	})
        const password = req.body.password;
		const confirmpassword = req.body.confirmpassword;
		/*const mobilenumber = req.body.mobilenumber;
      if(user.findOne({mobilenumber:mobilenumber}))
      {
      	res.json("yo")
      }  */
      
  
   
	    if(password!=confirmpassword) {
		res.json('errror')
	}

	else{
		const pj = await aj.save()
		res.json(pj)
	}
})
router.post('/login', (req,res)=>{
      var mobilenumber = req.body.mobilenumber;
      var password = req.body.password;
      user.findOne({mobilenumber:mobilenumber,password:password},function(err,data){
      	if(data){
      		 const token = jwt.sign({
      			mobilenumber:mobilenumber,
      			password:password
      		},process.env.TOKEN_SECRET,{
      			expiresIn : "1h"
      		})
      	      //token:token
      		res.send('login' + '/n' +  token)



      		//jwt.sign({ username:username,password:password }, privateKey, { algorithm: 'RS256' }, function(err, token) {
           // res.send(token);
//})
      		
      	}
      	else
      	{
      		res.send('failed')
      	}
      })
})

module.exports = router