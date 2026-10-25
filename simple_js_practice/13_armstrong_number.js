function noOfDigits(num, digitCount = 0) {

    if (num < 10 && num >= 0) return digitCount + 1;

    return noOfDigits((num - num % 10) / 10, digitCount + 1);
}

function power(base, power) {

    return base ** power;
}

// console.log(noOfDigits(0));

function isArmstrongNumber(num, armsNum, number) {

    if (num <= 0) return number === armsNum;

    return isArmstrongNumber(completeDivision(num), armsNum + power(num % 10, noOfDigits(number)), number);

}

function completeDivision(number, divisor = 10) {

    return (number - (number % divisor)) / divisor;
}

console.log(isArmstrongNumber(153, 0, 153));

