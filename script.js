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

      case 4:
        var largest = 0;

        var found = false;

        for (f = 999; f > 0; f--) {
          for (s = 999; s > 0; s--) {
            if (isPalindrome(f * s)) {
              if (f * s > largest) {
                largest = f * s
              }
            }
          }
        }

        output = largest;

        function isPalindrome(num) {

          var n = num.toString();

          if (n.toString().length % 2 == 0) {
            var right = n.substring(n.length / 2, n.length);
            var left = n.substring(0, n.length / 2);

            var right_inv = "";

            for (x = right.length - 1; x >= 0; x--) {
              right_inv = right_inv.concat(right[x]);
            }

            if (right_inv == left) {
              return true;
            }
            else {
              return false;
            }
          }

          else {
            return false;
          }
        }

        break;

      case 5:
        var found = false;

        var n = 21;

        while (!found) {

          if (divisible(n)) {
            output = n;
            found = true;
          }
          else {
            n++;
          }
        }

        function divisible(num) {

          var count = 0;

          for (x = 11; x <= 20; x++) {
            if (num % x == 0) count++;
          }

          if (count == 10) {
            return true;
          }
          else {
            return false;
          }
        }
        break;

      case 6:
        var squareSum = 0;
        var sumSquared = 0;

        for (x = 1; x <= 100; x++) {
          sumSquared += x;
          squareSum = squareSum + Math.pow(x, 2); 
        }

        var sumSquared = Math.pow(sumSquared, 2);

        output = sumSquared - squareSum;

        break;
        
      default:
        break;

    }
    $('#output').text(output)
  })

})