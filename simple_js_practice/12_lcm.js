function lcm(num1, num2, LCM = 1) {

    if (num1 === 0 || num2 === 0) return 0;
    if ((LCM * num2) % num1 === 0 && (LCM * num2) % num2 === 0) return LCM * num2;



    return lcm(num1, num2, LCM + 1);

}

console.log(lcm(10, 20));