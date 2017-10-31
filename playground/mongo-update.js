

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/toDoApp', (err, db)=>{

	if (err){
		return console.log("Unable to fire up", err);
	}

	console.log('Connected to the MongoDB server');


	db.collection('Users').findOneAndUpdate({_id : new ObjectID("59efb3b6d1cb832610e35b74")}, { $inc : {
		age : -5
	}}, { returnOriginal : false}).then((result)=>{
		console.log(result);
	})


})