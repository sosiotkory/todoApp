const mongoclient = require('mongodb').MongoClient;


mongoclient.connect('mongodb://localhost:27017/toDoApp', (err, db)=>{

	if (err){
		return console.log("Unable to fire up", err);
	}

	console.log('Connected to the MongoDB server');

	// db.collection('todos').deleteMany({text : "I am really trying"}).then((results)=>{

	// 	console.log(results);
	// })

	db.collection('todos').deleteOne({text : "I am really trying"}).then((result)=>{

		console.log(result);
	})
})


