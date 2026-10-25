function hcf(num1, num2) {

    if (num1 === 0 || num2 === 0) return num1 > num2 ? num1 : num2;
    if (num1 % num2 === 0) return num2;

    return hcf(num2, num1 % num2);

}

console.log(hcf(12, 15));
