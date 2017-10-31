//library imports
var express = require('express');
var bodyParser = require('body-parser');
//local imports
var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Todo} = require('./models/todo');




var app = express();


app.use(bodyParser.json());

// app.post('/todos', (req,res)=>{
// 	var todo = new Todo({
// 		text  : req.body.text
// 	});
// 	todo.save().then((docs)=>{

// 		res.send(docs);

// 	}, (err)=>{
// 		res.status(400).send(err);
// 	})
// })

app.post('/user', (req, res)=>{

	var user1 = new User({
		email : req.body.email
	});

	user1.save().then((docs)=>{
		res.send(docs);
	},(err)=>{

		res.status(400).send(err);
	})
})



app.listen(3000, ()=>{
	console.log('listening in port 3000');
})