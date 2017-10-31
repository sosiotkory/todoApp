const mongoclient = require('mongodb').MongoClient;


mongoclient.connect('mongodb://localhost:27017/toDoApp', (err, db)=>{

	if (err){
		return console.log("Unable to fire up");
	}

	console.log('Connected to the MongoDB server');

	// db.collection('todos').find({name: " Stephen Korir"}).toArray().then((docs)=>{

	// 	console.log('Todos');
	// 	console.log(docs[0].name);
	// 	// console.log(JSON.stringify(docs, undefined, 2));

	// }, (err)=>{

	// 	console.log('Unable to fetch data', err);
	// });


db.collection('todos').find().count().then((count)=>{

		console.log(`Todos : ${count}`);
		
		// console.log(JSON.stringify(docs, undefined, 2));

	}, (err)=>{

		console.log('Unable to fetch data', err);
	});

})


