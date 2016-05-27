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
        var sum = 0;
        var f = 1;
        var s = 2;

        while (s < 4000000) {
          if (s % 2 == 0) {
            sum += s;
          }

          temp = f;
          f = s;
          s = temp + s;

        }

        output = sum;

        break;
      default:

    }
    $('#output').text(output)
  })

})