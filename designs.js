// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready( function(){
  $('#sizepicker').submit(makeGrid())

  function makeGrid() {
    var height = $('#input_height').val();
    var width = $('#input_width').val();
    console.log(height);
    var table,row;
    for (var i = 0; i < height; i++) {
      table = $('#pixel_canvas');
      table.append('<tr class="row"></tr>')
      row = $('.row').last();
      for (var j = 0; j < width; j++) {
        row.append('<td></td>');
      }
    }
  }

});
