function palindrome(num, revNum, number) {

    if (num <= 0) return revNum === number;

    return palindrome((num - num % 10) / 10, revNum * 10 + num % 10, number);
}

console.log(palindrome(123, 0, 123));