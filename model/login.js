const mongoose = require('mongoose')
const LOGIN = new mongoose.Schema({
	username:
	{
		type : String,
		require : true
	},
	password:
	{
		type : String,
		require : true
	}
})
module.exports = mongoose.model('india' ,LOGIN)