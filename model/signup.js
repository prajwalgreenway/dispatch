const mongoose = require('mongoose')
const signup = new mongoose.Schema({
	firstname:
	{
		type : String,
		require : true
	},
	lastname:
	{
		type :String,
		require : true
	},
	mobilenumber:
	{
       type: Number,
       require : true
	},
	password:
	{
		type : String,
		require : true
	},
	confirmpassword:
	{
       type:String,
       require:true
	}
})
module.exports = mongoose.model('KASHMIR' ,signup)