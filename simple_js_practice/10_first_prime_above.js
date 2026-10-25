function isPrime(num, divisor = 2) {

    if (num <= 1) return false;
    if (divisor * divisor > num) return true;
    if (num % divisor === 0) return false;

    return isPrime(num, divisor + 1);

}


function firstPrimeAbove(number) {

    if (isPrime(number)) {
        console.log(number);
        return;
    }

    firstPrimeAbove(number + 1);

}

firstPrimeAbove(23);