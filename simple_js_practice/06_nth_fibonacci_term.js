function nthFibonacci(n) {
    if (n <= 1) return n;

    return nthFibonacci(n - 2) + nthFibonacci(n - 1);
}

// console.log(nthFibonacci(6));

function fiboByString(n, str1 = "", str2 = " ") {
    if (n == 0) return str1.length;

    return fiboByString(n - 1, str2, str1 + str2);
}

console.log(fiboByString(6));

