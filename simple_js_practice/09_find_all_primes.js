function isPrime(num, divisor = 2) {

    if (num <= 1) return false;
    if (divisor * divisor > num) return true;
    if (num % divisor === 0) return false;

    return isPrime(num, divisor + 1);

}

// console.log(isPrime(3, undefined));

function allPrimes(number, primeNum = 2) {

    if (primeNum > number) return;

    if (isPrime(primeNum)) {
        console.log(primeNum);
    }

    allPrimes(number, primeNum + 1);

}

allPrimes(100);

