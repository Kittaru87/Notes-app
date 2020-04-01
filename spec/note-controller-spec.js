console.log("Note controller tests")

console.log("tests it instantiates a note controller")

function testNoteControllerInstantiates(){
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
  assert.isTrue(notelistview.noteView() === "<ul><li><div>Lovely</div></li><li><div>What</div></li></ul>");
};

testHTMLOutput()