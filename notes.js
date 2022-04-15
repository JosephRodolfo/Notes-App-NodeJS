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
  console.log(notes);

};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
};
