const mongoclient = require('mongodb').MongoClient;


mongoclient.connect('mongodb://localhost:27017/toDoApp', (err, db)=>{

	if (err){
		return console.log("Unable to fire up");
	}

	console.log('Connected to the MongoDB server');


// 	db.collection('todos').insertOne({

// 		text : 'I am trying this out', 
// 		name : " Stephen Korir"
// 	}, (err, results)=>{

// if (err){
// 	return console.log("Unable to fire up");
// }

// console.log(JSON.stringify(results.ops, undefined, 2));


// 	})



db.collection('Users').insertOne({
	name: " Stephen Korir",
	age : 26, 
	location : "Eldoret"
}, (err, result)=>{

if (err){
	return console.log(" unable to insert");
}
console.log(result.ops[0]._id.getTimestamp());
})
	db.close();

})