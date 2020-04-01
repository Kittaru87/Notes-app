console.log("single note view tests")

console.log("test it instantiates with a single note view")

function testSingleNoteViewInstantiates(){
  let wee = new SingleNoteView();
  assert.isTrue(wee instanceof SingleNoteView)
};

testSingleNoteViewInstantiates()

console.log("tests outputs text in a div tag")

function testSingleNoteView(){
  function MockNote(){
    return {text: "favourite drink: seltzer"}
  };
  let mockNote = new MockNote();
  let snv = new SingleNoteView(mockNote)
  assert.isTrue(snv.display() === "<div>favourite drink: seltzer</div>")
};

testSingleNoteView();
