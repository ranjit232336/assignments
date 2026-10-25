function isPrime(num, divisor = 2) {

    if (num <= 1) return false;
    if (divisor * divisor > num) return true;
    if (num % divisor === 0) return false;

    return isPrime(num, divisor + 1);

}

// console.log(isPrime(13))

function recursiveDiv(num1, num2) {

    if (num1 % num2 == 0) {

        console.log(num2);
        return recursiveDiv(num1 / num2, num2);

    }
    else return num1;

}

// recursiveDiv(16, 2);

function primeFactors(number, factor = 2) {

    if (factor > number) return;
    if (isPrime(factor)) {


        primeFactors(recursiveDiv(number, factor), factor + 1);
    }
    else primeFactors(number, factor + 1);

}

primeFactors(100);