function f(n) {
    if (n <= 0) return 0;

    let digit, sum = 0,
        temp = n;

    while (temp > 0) {
        digit = temp % 10;
        sum += digit * digit * digit;
        temp = Math.floor(temp / 10);
    }

    return sum === n ? 1 : 0;
}

console.log("153 cubePowerful status: " + f(153));
console.log("12 cubePowerful status: " + f(12));
console.log("370 cubePowerful status: " + f(370));
// console.log(" cubePowerful status: " + f());