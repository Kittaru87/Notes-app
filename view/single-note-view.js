

(function(exports) {

  function SingleNoteView(singlenote = new Note("")){
    this.singlenote = singlenote
  };

  SingleNoteView.prototype.display = function(){
    return `<div>${this.singlenote.text}</div>`
  } 

  exports.SingleNoteView = SingleNoteView;

})(this);
