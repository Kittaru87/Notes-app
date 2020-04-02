(function(exports) {

function NoteList(){
  this.noteArray = [];
}

 NoteList.prototype.createNote = function(text){
    var note = new Note(text);
    this.noteArray.push(note);
    return note;
  };

  NoteList.prototype.getNoteByID = function(id){
    return this.noteArray[id].text;
  };

  exports.NoteList = NoteList;
  exports.NoteList.createNote = NoteList.createNote;
  exports.NoteList.getNoteByID = NoteList.getNoteByID;

})(this);

