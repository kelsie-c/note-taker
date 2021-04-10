const noteData = require('./data/noteData');

module.exports = (app) => {
     app.get('/api/notes', (req, res) => res.json(noteData));

     app.post('/api/notes', (req, res) => {
          req.body.id = noteData.length;
          noteData.push(req.body);
          res.json(true);
     })

     app.delete('api/notes/:id', (req, res) => {
          let filteredNotes = noteData.find(({id}) => id === req.params.id);
          writeToJsonFile(filteredNotes);
          // notes = filteredNotes;
     })
}