const fs = require('fs');
const filePath = 'notes.json';

function getNotes() {
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading file:", err);
    return [];
  }
}

function saveNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

function addNote(text) {
  const notes = getNotes();
  const newNote = {
    id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,
    text,
    createdAt: new Date().toISOString()
  };
  notes.push(newNote);
  saveNotes(notes);
  return newNote;
}

function editNote(id, newText) {
  const notes = getNotes();
  const note = notes.find(note => note.id === id);
  if (!note) return null;
  note.text = newText;
  saveNotes(notes);
  return note;
}

function deleteNote(id) {
  let notes = getNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index === -1) return null;
  const removed = notes.splice(index, 1)[0];
   notes = notes.map((note, index) => ({
            id: index + 1,
            text: note.text,
          }));
  saveNotes(notes);
  return removed;
}

module.exports = {
  getNotes,
  addNote,
  editNote,
  deleteNote,
};
