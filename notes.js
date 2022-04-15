const fs = require("fs");
const getNotes = () => {
  return "Your notes ...";
};

const addNote = (title, body) => {
  const loadNotes = () => {
    try {
      const dataBuffer = fs.readFileSync("notes.json");

      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
    } catch (e) {
      return [];
    }
  };
  const notes = loadNotes();
  const duplicateNotes = notes.filter((element) => {
    return element.title == title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log("new note found");
  } else {
    console.log("note title taken");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
