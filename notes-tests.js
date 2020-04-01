
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

function testFirst20Characters(){
  function MockNote(){
    return {text: "favourite drink: seltzer"}
  };
  let mockNote = new MockNote();
  function MockNoteList(){
    return {noteArray: [mockNote]}
  };
  let mocknotelist = new MockNoteList(mockNote);
  let newthing = new NoteListView(mocknotelist)
  console.log(newthing.noteView());
  assert.isTrue(newthing.noteView() === "<ul><li><div>favourite drink: sel</div></li></ul>");
};

testFirst20Characters()

function testNoteControllerInstantiates(){
  const z = new NoteController(n);
  assert.isTrue(z instanceof NoteController)
};

testNoteControllerInstantiates()

function testHTMLOutput(){
  let nl = new NoteList();
  nl.createNote("Lovely");
  nl.createNote("What");
  let notelistview = new NoteListView(nl);
  assert.isTrue(notelistview.noteView() === "<ul><li><div>Lovely</div></li><li><div>What</div></li></ul>");
};

testHTMLOutput()

function testSingleNoteViewInstantiates(){
  let wee = new SingleNoteView();
  assert.isTrue(wee instanceof SingleNoteView)
};

testSingleNoteViewInstantiates()

function testSingleNoteView(){
  function MockNote(){
    return {text: "favourite drink: seltzer"}
  };
  let mockNote = new MockNote();
  let snv = new SingleNoteView(mockNote)
  assert.isTrue(snv.display() === "<div>favourite drink: seltzer</div>")
};

testSingleNoteView();



