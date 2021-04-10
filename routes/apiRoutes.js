// require variables
const noteData = require('../data/noteData');
const fs = require('fs');
const uniqid = require('uniqid');

// export app routes
module.exports = (app) => {
     // get notes from data array
     app.get('/api/notes', (req, res) => res.json(noteData));

     // post notes from user input
     app.post('/api/notes', (req, res) => {
          // add an id to the note
          req.body.id = uniqid();
          // push note to data array
          noteData.push(req.body);
          res.json(true);
     })

     // delete notes
     app.delete('api/notes/:id', (req, res) => {
          // filter notes that do not match the clicked 
          let filteredNotes = noteData.find(({id}) => id === req.params.id);
          console.log(filteredNotes);
          fs.writeFile('./db/db.json', JSON.stringify(filteredNotes), function (err) {
               if(err) {
                    throw err;
               }
          })
          res.json({ ok: true });
     })
}