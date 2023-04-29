function f(n) {
    let a = 1,
        sum, b;

    for (b = 1;;) {
        sum = a + b;
        if (sum > n) break;
        a = b;
        b = sum;
    }

    return b;
}

console.log(f(13));
console.log(f(33));
console.log(f(34));