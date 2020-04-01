console.log("note list model tests")

console.log("test it creates a note")

function testCreateNote() {
  const x = new NoteList();
  assert.isTrue(x.createNote("one note").getText() === "one note");
  assert.isTrue(x.createNote("other note"));
  assert.isTrue(x.noteArray.length === 2);
};

testCreateNote();

console.log("test it creates a note array")

function testNoteArray() {
  const n = new NoteList();
  n.createNote("first thing");
  n.createNote("second thing");
  assert.isTrue(n.noteArray.length === 2);
  assert.isTrue(n.getNotes()[0].getText() === "first thing");
  assert.isTrue(n.getNotes()[1].getText() === "second thing");
};

testNoteArray();