console.log("Note controller tests")

console.log("tests it instantiates a note controller")

function testNoteControllerInstantiates(){
  const n = new NoteList();
  const z = new NoteController(n);
  assert.isTrue(z instanceof NoteController)
};

testNoteControllerInstantiates()

console.log("tests that the notelist is empty when the note app loads")

function testEmptyNoteList(){
  const n = new NoteList();
  assert.isTrue(document.getElementById('app').innerHTML === "<ul></ul>")
};

testEmptyNoteList()