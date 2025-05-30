const express = require('express');
const { getNotes, addNote, editNote, deleteNote } = require('./notes');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  

app.get('/notes', (req, res) => {
  const notes = getNotes();
  res.json(notes);
});

app.post('/notes', (req, res) => {  
  let text = req.body.text;
  console.log(req.body);
  if (typeof text !== 'string' || text.trim() === '') {
    return res.status(400).json({ error: 'Note text must be a non-empty string' });
  }
  if (!text || text.trim() === "") {
    return res.status(400).json({ error: 'Note text cannot be empty.' });
  }
  const newNote = addNote(text);
  res.status(201).json(newNote);
});

app.put('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const text  = req.body.text;
  if (!text || text.trim() === "") {
    return res.status(400).json({ error: 'New text cannot be empty.' });
  }
  const updated = editNote(id, text);
  if (!updated) {
    return res.status(404).json({ error: 'Note not found.' });
  }
  res.json(updated);
});

app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteNote(id);
  if (!deleted) {
    return res.status(404).json({ error: 'Note not found.' });
  }
  res.json({ message: 'Note deleted', note: deleted });
});

app.listen(3000, () => console.log('Server running on port 3000'));

