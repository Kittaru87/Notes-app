console.log("Note List View tests")

console.log("Test it instantiates properly")

function testNoteListViewInstantiatesWithNoteList(){
  const p = new NoteListView(n);
  assert.isTrue(p.notelist.noteArray.length === 2);
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
  console.log(newthing.noteView());
  assert.isTrue(newthing.noteView() === "<ul><li><div>favourite drink: sel</div></li></ul>");
};

testFirst20Characters()