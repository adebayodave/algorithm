function f(n) {
    let sum, pow, i, j;

    for (i = 1; i <= 9; i++) {
        sum = 0;
        pow = 1;
        for (;;) {
            sum += i * pow;
            pow = pow * 10 + 1;
            if (sum === n) return 1;
            else if (sum > n) break;
        }
    }

    return 0;
}

console.log(f(36));
console.log(f(984));
console.log(f(12));
console.log(f(100));
console.log(f(7404));