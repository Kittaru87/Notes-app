

(function(exports){

  function NoteController(notelist = new NoteList()){
    this.notelistview = new NoteListView(notelist)
  };


  NoteController.prototype.insertNote = function(){
     let noteDisplay = document.getElementById('app');
     noteDisplay.innerHTML = this.notelistview.noteView();
  };

  exports.NoteController = NoteController;
  exports.NoteController.insertNote = NoteController.insertNote;

})(this);


// n.createNote("Favourite drink: seltzer")




