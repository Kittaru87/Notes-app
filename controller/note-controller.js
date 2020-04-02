
(function(exports){

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
  };

  NoteController.prototype.showList = function(){
     let noteDisplay = document.getElementById('app');
     noteDisplay.innerHTML = this.notelistview.noteView();
  };

  NoteController.prototype.hideCreateNote = function() {
    window.addEventListener('hashchange', function(){
      document.getElementById('text').style.display = "none";
    });  
  };

  NoteController.prototype.showAllOfSingleNote = function() {
    var list = this.notelist
    window.addEventListener('hashchange', function(){
      var noteId = window.location.hash.split('#note_')[1];
      document.getElementById('app').innerHTML = list.getNoteByID([noteId]);
      hideCreateNote();
    }, false);
  };
  
  NoteController.prototype.createNewNote = function () {
    var list = this.notelist
    document.getElementById('text').addEventListener('submit', function(event){
      let new_note = document.getElementById('new_note').value
      list.createNote(new_note)
      console.log(`Note Submitted! ${new_note}`)
      updateNoteList(list)
      resetTextArea()
      event.preventDefault()
    });
  };

    function updateNoteList(list) {
      document.getElementById('app').innerHTML = new NoteListView(list).noteView();
    };

      //doesn't work yet
    function goBackToHomePage() {
      window.getElementById('back').addEventListener('submit', function(){
        document.getElementById('everything')
      })
    };

    function resetTextArea() {
      document.getElementById('new_note').value = "";
    }


  exports.NoteController = NoteController;
  exports.NoteController.insertNote = NoteController.insertNote;
  exports.NoteController.showAllOfSingleNote = NoteController.showAllOfSingleNote;
  exports.NoteController.createNewNote = NoteController.createNewNote;
  exports.NoteController.hideCreateNote = NoteController.hideCreateNote;

})(this);


var n = new NoteList();


 let notecontrollerexample = new NoteController(n)

 notecontrollerexample.showList();
 notecontrollerexample.showAllOfSingleNote();
 notecontrollerexample.createNewNote();
 notecontrollerexample.hideCreateNote();
