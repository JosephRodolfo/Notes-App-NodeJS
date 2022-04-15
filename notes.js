const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");

    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((element) => element.title == title);

  if (duplicateNote == undefined) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);

    console.log("New note added");
  } else {
    console.log("Note title already taken");
  }
};

const removeNote = (title) => {
  let newData = loadNotes();

  const filteredNotes = newData.filter((element) => {
    return element.title !== title;
  });

  if (newData.length > filteredNotes.length) {
    console.log(chalk.green.inverse("Note removed!"));

    saveNotes(filteredNotes);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const listNotes = () => {
  console.log(chalk.inverse("Your Notes"));
  let notes = loadNotes();
  notes.forEach((e) => {
    console.log(e.title);
  });
};

const readNote = (title)=> {
  let notes = loadNotes();
  let note = notes.filter(element=> element.title ==title);

  if (note[0] === undefined){
    console.log(chalk.red.inverse("No note found"))
  } else {

    console.log(chalk.green.inverse("Your desired note:"))

    console.log(note);

  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
