$(function () {

  $('#submit').click(function () {
    var number = parseInt($('#problem').val());
    var output = "Not a valid case";

    switch (number) {
      case 1:
        var sum = 0;
        for (x = 0; x < 1000; x++) {
          if (x % 5 == 0 || x % 3 == 0) {
            sum = sum + x;
          }
        }
        output = sum;
        break;
      case 2:
        output = "2"

        break;
      default:

    }
    $('#output').text(output)
  })

})