const mongoose = require('mongoose')
const truck = new mongoose.Schema({
	truck_number:
	{
		type : Number
		
	},
	driver_name:
	{
       type : String
       
	},
	contact_number:
	{
		type : Number
	},
	alternate_contact_number:
	{
		type : Number

	},
	logistic_partner_name:
	{
		type: String
	},
	driver_license:
	{
		type : String
	},
	registration_copy:
	{
		type : String
	},
	eway_bill_number:
	{
		type: Number
	},
	additional_information:
	{
		type : String
	}

})

module.exports = mongoose.model('vb' , truck)

