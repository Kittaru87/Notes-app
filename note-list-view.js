(function(exports) {

  function NoteListView(notelist){
    this.notelist = notelist;
  }

  NoteListView.prototype.noteView = function(){
    map1 = this.notelist.noteArray.map(item => item.text)
    joined = map1.join().replace(",", "</div></li><li><div>");
    return "<ul><li><div>" + joined + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView;
  exports.NoteListView.noteView = NoteListView.noteView;

})(this);

const v = new NoteListView(n)


console.log(v.notelist.text)
console.log(v.notelist.getNotes()[0])

console.log(v.noteView())



