$(document).ready(function(){

  var noteCount = 0;
  var activeNote = null;

//Save function + adding to listed notes
  $('#save').click(function(){
    var title = $('#title-field').val();
    var body = $('#body-field').val();
    if (title === '' && body === '') {
      alert ('You forgot a title or body to your note!!');
      return;
    }
    var created = new Date();
    var id = noteCount + 1;
    if (activeNote) {
      $('#' + activeNote)[0].children[0].innerHTML = title;
      $('#' + activeNote)[0].children[1].innerHTML = created.toLocaleString("en-US");
      $('#' + activeNote)[0].children[2].innerHTML = body;
      activeNote = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    } else {
      var created = new Date();
      $('#listed').append('<div id="note' + id + '"><div class="list-title">' + title
        + '</div> <div class="list-date">' + created.toLocaleString("en-US")
          + '</div> <div class="list-text">' + body + '</div> </div>');
      noteCount+= 1;
    };
    $('#title-field').val('');
    $('#body-field').val('');
  });


// Delete button
  $('#delete').click(function(){
    if (activeNote) {
      $('#' + activeNote)[0].remove();
      activeNote = null;
      $('#edit-mode').removeClass('display').addClass('no-display');
    }
      $('#title-field').val('');
      $('#body-field').val('');
  });

  $('#listed').click(function(e){
    var id = e.target.parentElement.id;
    activeNote = id;
    $('#edit-mode').removeClass('no-display').addClass('display');
    var titleSel = $('#' + id)[0].children[0].innerHTML;
    var bodySel = $('#' + id)[0].children[2].innerHTML;
    $('#title-field').val(titleSel);
    $('#body-field').val(bodySel);
  })

})
