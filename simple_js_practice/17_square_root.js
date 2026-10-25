function squareRoot(num, sqRoot) {

    if (num < 0) {
        console.log("Square root of a negative number is not defined....");
        return;
    }

    if (num === 0) return sqRoot;

    if (sqRoot * sqRoot <= num)
        return squareRoot(num, sqRoot + 1);

    else return sqRoot - 1;


}

console.log(squareRoot(64, 0));
