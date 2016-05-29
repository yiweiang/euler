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

      case 7:

        var count = 0;
        var cur = 1;

        while (count <= 10001) {
          if (isPrime(cur)) {
            count++
            console.log(cur)
          }
          cur++;
        }

        output = cur - 1;

        function isPrime(num) {
          var stat = true;
          for (x = 2; x < num; x++) {
            if (num % x == 0) {
              stat = false;
            }
          }
          return stat;
        }
        break;

      case 8:
        var max = 0;

        var digits = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"

        for (x = 0; x < digits.length - 4; x++) {

          var product = 1;

          for (i = x; i < x + 13; i++) {
            product = product * parseInt(digits[i]);
          }

          if (product > max) max = product;
        }

        output = max;

      case 9:
        for (a = 1; a < 1000; a++) {
          for (b = 1; b < 1000; b++) {
            var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            if (Number.isInteger(c) && a < b && a + b + c == 1000) output = a * b * c
          }
        }

        break;
        
      default:
        break;

    }
    $('#output').text(output)
  })

})