// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  $('table').empty();

  var height = $('#input_height').val();
  var width = $('#input_width').val();
  var colorPicker = $('#colorPicker');
  var table,row;

  for (var i = 0; i < height; i++) {
    table = $('#pixel_canvas');
    table.append('<tr class="row"></tr>')
    row = $('.row').last();
    for (var j = 0; j < width; j++) {
      row.append('<td></td>');
    }
  }

  $('td').click( function(){
    this.style.backgroundColor = colorPicker.val();
  } );

  $('td').dblclick( function(){
    this.style.backgroundColor = "";
  } );

}

function clearGrid(){
  $('table').empty();
}
