const express = require('express');
const path = require('path');
const noteJSON = require('./Develop/db/db.json');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// HTML route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// HTML route to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

// API route to get json of notes
app.get('/api/notes', (req, res) => {
    res.json(noteJSON);
});

// API route to POST new notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;

    console.log(newNote);
    res.json(newNote);
});

// Server listening
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));