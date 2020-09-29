const mongoose = require('mongoose')
const dispatch = new mongoose.Schema({
	refrence_number:
	{
		type : Number,
	    require : true
	},
	quantity:
	{
		type : Number,
		require : true
	}

	
	
})


module.exports = mongoose.model('alien' , dispatch)