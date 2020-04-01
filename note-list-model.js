(function(exports) {

function NoteList(){
  this.noteArray = [];
}

 NoteList.prototype.createNote = function(text){
    var note = new Note(text);
    this.noteArray.push(note);
    return note;
  };

  NoteList.prototype.getNotes = function(){
    return this.noteArray;
  };

  exports.NoteList = NoteList;
  exports.NoteList.createNote = NoteList.createNote;
  exports.NoteList.getNotes = NoteList.getNotes;

})(this);

  var n = new NoteList();

 n.createNote("first thing")
 n.createNote("second thing")

   
  console.log(n.noteArray)
  console.log(n.getNotes())
  console.log(n.noteArray[0].text)
  console.log(n.noteArray[1].text)
  console.log(n.noteArray.length)

