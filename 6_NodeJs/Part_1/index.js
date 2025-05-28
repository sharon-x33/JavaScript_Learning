const fs = require("fs");

const command = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];

const filePath = "notes.json";

const inputs = process.argv.length;
if (inputs === 3) {
  const command = process.argv[2];

  if (command === "list") {
    notes = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      try {
        notes = JSON.parse(data);
        notes.forEach((note) => {
          console.log(note.text);
        });
      } catch (err) {
        console.log("Could not read JSON, starting fresh.");
      }
    }
  }
} else if (inputs === 4) {
  const command = process.argv[2];
  const input1 = process.argv[3];

  if (command === "add") {
    let notes = [];

    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      try {
        notes = JSON.parse(data);
      } catch (err) {
        console.log("Could not parse JSON, starting fresh.");
      }
    }

    const newNote = {
      id: notes.length + 1,
      text: input1,
    };

    notes.push(newNote);

    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
    console.log("Note added:", input1);
  } else if (command === "remove") {
    notes = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      try {
        notes = Array.from(JSON.parse(data));
        if (notes.length === 0) {
          console.log("the file is empty");
        } else {
          let del = notes[input1 - 1].text;
          notes.splice(input1 - 1, 1);
          // re
          notes = notes.map((note, index) => ({
            id: index + 1,
            text: note.text,
          }));

          fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
          console.log(`note number ${input1} "${del}" removed`);
        }
      } catch (err) {
        console.log("Could not read JSON, starting fresh.");
      }
    }
  }
} else if (inputs === 5) {
  const command = process.argv[2];
  const itemNumber = process.argv[3];
  const newText = process.argv[4];

  if (command === "edit") {
    notes = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      try {
        notes = Array.from(JSON.parse(data));
        if (notes.length === 0) {
          console.log("the file is empty");
        } else {
          let changed = notes[itemNumber - 1].text;
          notes.forEach((note) => {
            if (note.id == itemNumber) {
              note.text = newText;
            }
          });
          fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
          console.log(
            `note number ${itemNumber} "${changed}" edited to "${newText}"`
          );
        }
      } catch (err) {
        console.log("Could not read JSON, starting fresh.");
      }
    }
  }
}