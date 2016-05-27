$(function () {

  $('#submit').click(function () {
    var number = parseInt($('#problem').val());
    var output = "Invalid";

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
      case 3:
        var max = 600851475143;

        var cur = 2;

        output = calc(max);

        function calc(localmax) {
          if (isPrime(localmax)) {
            console.log(localmax);
            return localmax
          }
          else {
            var x = cur;

            while (localmax % x != 0) {
              x++;
            }

            cur = x;

            return calc(localmax / cur)
          }

        }

        function isPrime(num) {
          var stat = true;
          for (x = 2; x < Math.sqrt(num); x++) {
            if (num % x == 0) {
              stat = false;
            }
          }
          return stat;
        }
        
        break;

      default:

    }
    $('#output').text(output)
  })

})