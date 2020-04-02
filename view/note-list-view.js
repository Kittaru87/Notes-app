(function(exports) {

  function NoteListView(list){
    this.list = list;
  }

  NoteListView.prototype.noteView = function(){
    let noteAndID = this.list.noteArray.map((note, i) => {
      return `<a href='#note_${i}' id='${i}'>${note.text.slice(0, 20)}</a>`
    })
    joined = noteAndID.join().replace(/,/g, "</div></li><li><div>");
    return "<ul><li><div>" + joined + "</div></li></ul>"
  }

  exports.NoteListView = NoteListView;
  exports.NoteListView.noteView = NoteListView.noteView;

})(this);





