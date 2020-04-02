console.log("Note controller tests")

console.log("tests it instantiates a note controller")

function testNoteControllerInstantiates(){
  const n = new NoteList();
  const z = new NoteController(n);
  assert.isTrue(z instanceof NoteController)
};

testNoteControllerInstantiates()

console.log("tests it outputs HTML with tags")

function testHTMLOutput(){
  let nl = new NoteList();
  nl.createNote("Lovely");
  nl.createNote("What");
  let notelistview = new NoteListView(nl);
  assert.isTrue(notelistview.noteView() === "<ul><li><div><a href='#note_0' id='0'>Lovely</a></div></li><li><div><a href='#note_1' id='1'>What</a></div></li></ul>");
};

testHTMLOutput()