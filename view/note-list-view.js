(function(exports) {

  function NoteListView(list){
    this.list = list;
  }

  NoteListView.prototype.noteView = function(){
    let noteAndID = this.list.noteArray.map((note, i) => {
      return `<li><div><a href='#note_${i}' id='${i}'>${note.text.slice(0, 20)}</a></div></li>`
    })
    joined = noteAndID.join("");
    return "<ul>" + joined + "</ul>"
  }

  exports.NoteListView = NoteListView;
  exports.NoteListView.noteView = NoteListView.noteView;

})(this);





