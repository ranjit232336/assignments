function fiboSeries(noOfTerm, currentTerm = 0) {

    if (currentTerm > noOfTerm) return;

    console.log(nthfiboTerm(currentTerm));
    fiboSeries(noOfTerm, currentTerm + 1);

}

function nthfiboTerm(number) {

    if (number <= 1) return number;

    return nthfiboTerm(number - 1) + nthfiboTerm(number - 2);

}

fiboSeries(10);