const fs = require("fs");
const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    body: {
        describe: 'body',
        demandOption: true,
        type: 'string'
    },
    title: {
      describe: "Note title",
      demandOption: false,
      type: 'string'
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  },
});

yargs.command({
  command: "remove",
  describe: "remove a note",
  handler: function () {
    console.log("removing a note");
  },
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () {
    console.log("reading a note");
  },
});

yargs.command({
  command: "list",
  describe: "list the notes",
  handler: function () {
    console.log("listing notes");
  },
});

yargs.parse();