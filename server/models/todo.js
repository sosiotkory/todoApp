

var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {

	text : {
		type : String
	},
	completed : {

		type : Boolean
	},

	completedat : {

		type : Number
	}

});

module.exports = {Todo};