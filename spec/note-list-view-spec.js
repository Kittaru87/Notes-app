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

