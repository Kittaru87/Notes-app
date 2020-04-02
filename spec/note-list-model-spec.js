console.log("note list model tests")

console.log("test it creates a note")

function testCreateNote() {
  const x = new NoteList();
  assert.isTrue(x.createNote("one note").getText() === "one note");
};

testCreateNote();

console.log("test it creates a note array")

function testNoteArray() {
  const n = new NoteList();
  n.createNote("first thing");
  n.createNote("second thing");
  assert.isTrue(n.noteArray.length === 2);
};

testNoteArray();

console.log("Test that each note is given a unique id")

function testGetNoteByID(){
  const n = new NoteList();
  n.createNote("first thing");
  n.createNote("second thing");
  assert.isTrue(n.getNoteByID(0) === "first thing")
  assert.isTrue(n.getNoteByID(1) === "second thing")
};

testGetNoteByID();
