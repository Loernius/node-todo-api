const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>{
  //   if(err){
  //     return console.log('Unable to insert todo ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Fabiano',
    age: 21,
    location: 'Nilopolis, Rio de Janeiro'
  }, (err, result)=>{
    if(err){
      return console.log('Unable to insert a user ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
