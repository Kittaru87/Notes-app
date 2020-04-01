var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed:" + assertionToCheck + "is not truthy")
    } else {
      console.log("%c Your test have passed!!", "color: green");
    }
  }
};

function testGetText() {
  const note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
};

testGetText();

function testCreateNote() {
  const x = new NoteList();
  assert.isTrue(x.createNote("one note").getText() === "one note");
  assert.isTrue(x.createNote("other note"));
  assert.isTrue(x.noteArray.length === 2);
};

testCreateNote();

function testNoteArray() {
  const n = new NoteList();
  n.createNote("first thing");
  n.createNote("second thing");
  assert.isTrue(n.noteArray.length === 2);
  assert.isTrue(n.getNotes()[0].getText() === "first thing");
  assert.isTrue(n.getNotes()[1].getText() === "second thing");
};

testNoteArray();

function testNoteListViewInstantiatesWithNoteList(){
  const p = new NoteListView(n);
  assert.isTrue(p.notelist.noteArray.length === 2);
};

testNoteListViewInstantiatesWithNoteList();

function testNoteView(){
  const p = new NoteListView(n);
  assert.isTrue(p.noteView() === "<ul><li><div>first thing</div></li><li><div>second thing</div></li></ul>");
};

testNoteView()

