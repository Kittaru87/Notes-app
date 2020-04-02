
(function(exports){

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
  };

  NoteController.prototype.showList = function(){
     let noteDisplay = document.getElementById('app');
     noteDisplay.innerHTML = this.notelistview.noteView();
  };

  NoteController.prototype.showAllOfSingleNote = function() {
    var list = this.notelist
    window.addEventListener('hashchange', function(){
      var noteId = window.location.hash.split('#note_')[1];
      document.getElementById('app').innerHTML = list.getNoteByID([noteId]);
    }, false);
  };

  NoteController.prototype.createNewNote = function () {
    document.getElementById("submit").addEventListener("click", function(event){
      event.preventDefault()
    });
  };

  exports.NoteController = NoteController;
  exports.NoteController.insertNote = NoteController.insertNote;
  exports.NoteController.showAllOfSingleNote = NoteController.showAllOfSingleNote;
  exports.NoteController.createNewNote = NoteController.createNewNote;

})(this);


var n = new NoteList();

 n.createNote("first thing gotta make this way more than 20 character")
 n.createNote("second thing also gotta have more than 20 characters to test")
 n.createNote("a third thing that hopefully works now as well")
 console.log(n.getNoteByID(0))
 console.log(n.getNoteByID(1))

 let notecontrollerexample = new NoteController(n)

 notecontrollerexample.showList();
 notecontrollerexample.showAllOfSingleNote();
 notecontrollerexample.createNewNote();
