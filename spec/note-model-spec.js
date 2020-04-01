console.log("note model tests")

console.log("Tets it gets text back")

function testGetText() {
  const note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
};

testGetText();