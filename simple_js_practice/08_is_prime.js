function isPrime1(num, divisor = 2) {

    if (num <= 1) return false;
    if (divisor === num) return true;
    if (num % divisor === 0) return false;

    return isPrime1(num, divisor + 1);

}


function isPrime2(num, divisor = 2) {

    if (num <= 1) return false;
    if (divisor * divisor > num) return true;
    if (num % divisor === 0) return false;

    return isPrime2(num, divisor + 1);

}

console.log(isPrime2(9));