// require variables
const noteData = require('../data/noteData');

// export app routes
module.exports = (app) => {
     // get notes from data array
     app.get('/api/notes', (req, res) => res.json(noteData));

     // post notes from user input
     app.post('/api/notes', (req, res) => {
          // add an id to the note
          let id = noteData.length + 1;
          req.body.id = parseInt(id);
          // push note to data array
          noteData.push(req.body);
          // end response
          res.json(true);
     })

     // delete notes
     app.delete('/api/notes/:id', (req, res) => {
          // identify the selected id
          let note = noteData.find(({id}) => id === JSON.parse(req.params.id));
          // remove from data array
          noteData.splice(noteData.indexOf(note), 1);
          // end response
          res.end();

     })
}