// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


// db.collection('Todos').find({
//   _id: new ObjectID('58d0dee527016b94aacbcbcd')
//
// }).toArray().then((docs) => {
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

// db.colection('Todos').find().count().them((count) => {
//    console.log(`Todos count: ${count}`);
// } (err) => {
//   console.log('Unable to fetch todos', err);
// });


// tuis is a query that we made ===>

    db.collection('Users').find({name:'Felipe'}).toArray().then((docs) => {
       console.log(JSON.stringify(docs, undefined, 2));
    });


    //  dbclose();
});



// -------
