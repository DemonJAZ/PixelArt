// makeGrid function to initialize table and add event listners
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

  $('td').click( function(){      // function to Change color of the cell by single click
    this.style.backgroundColor = colorPicker.val();
  } );

  $('td').dblclick( function(){   // function to clear color of the cell by double click
    this.style.backgroundColor = "";
  } );

}

function clearGrid(){
  $('table').empty();
}
