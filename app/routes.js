//app/routes.js

module.exports = function(app, db) {
  // When the app recieves a post request to the '/notes' path, it will execute the code inside the callback
  // passed in is a JSON request object and a res response object
  // Youre going to call a method on your database collection of notes

  app.get('/login/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('login').findOne(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occurred'});
      } else{
        res.send(item);
      }
    });
  });

  // use <remove> rather than <findOne> to remove an object from your
  app.delete('/login/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('login').remove(details, (err, item) => {
      if (err) {
        res.send({'error': 'An error has occured'});
      } else{
        res.send('User' + id + ' has been deleted!');
      }
    });
  });

  // PUT finds the object, and updates it accordingly
  app.put('/login/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { text: req.body.body, title: req.body.title };
    db.collection('login').update(details, note, (err,result) => {
      if (err){
        res.send({'error': 'An error has occurred'});
      } else {
        res.send(note);
      }
    });
  });

  // store info in collections, access the db collection via db.collection('notes')
  app.post('/login', (req, res) => {
    const note = { text: req.body.body, title: req.body.title};
    db.collection('login').insert(note, (err, result) =>{
      if (err){
        res.send({'error': 'An error has occured'})
      } else{
        res.send(result.ops[0]);
      }
    });
  });

};
