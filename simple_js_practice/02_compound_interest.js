function power(a, x) {
    return a ** x;
}

function compInterest(amount, rate, time) {
    return amount * power((1 + rate / 100), time) - amount;
}
console.log(compInterest(100, 10, 1));
