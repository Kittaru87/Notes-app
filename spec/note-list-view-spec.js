console.log("Note List View tests")

console.log("Test it instantiates properly")

function testNoteListViewInstantiatesWithNoteList(){
  const n = new NoteList();
  n.createNote("Lovely");
  n.createNote("What");
  const p = new NoteListView(n);
  assert.isTrue(p.list.noteArray.length === 2);
};

testNoteListViewInstantiatesWithNoteList();

console.log("tests it outputs HTML with tags")

function testHTMLOutput(){
  let nl = new NoteList();
  nl.createNote("Lovely");
  nl.createNote("What");
  let notelistview = new NoteListView(nl);
  assert.isTrue(notelistview.noteView() === "<ul><li><div><a href='#note_0' id='0'>Lovely</a></div></li><li><div><a href='#note_1' id='1'>What</a></div></li></ul>");
};

testHTMLOutput()

console.log("Test it displays first 20 characters of each line")

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
  assert.isTrue(newthing.noteView() === "<ul><li><div><a href='#note_0' id='0'>favourite drink: sel</a></div></li></ul>");
};

testFirst20Characters()

