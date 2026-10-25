function decimalToBinary(decimal, binary = 0, bitPlace = 1) {

    if (decimal <= 0) return binary;


    return decimalToBinary(completeDivision(decimal), binary + (decimal % 2) * bitPlace, bitPlace * 10);
}

function completeDivision(number, divisor = 2) {

    return (number - (number % divisor)) / divisor;
}

// console.log(completeDivision(13, 4));

console.log(decimalToBinary(10));
