function evenUptoN(count, number) {
    if (count > number) return;
    console.log(count);
    evenUptoN(count + 2, number);
}

evenUptoN(2, 10);