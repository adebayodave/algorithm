function f(x, a) {
    let i, j, pow;
    let sum = 0;

    for (i = 0; i < a.length; i++) {
        pow = 1;
        for (j = 0; j < i; j++) {
            pow *= x;
        }
        sum += pow * a[i];
    }

    return sum;
}

console.log(f(1.0, [0, 1, 2, 3, 4]));
console.log(f(3.0, [3, 2, 1]));
console.log(f(2.0, [3, -2, -1]));
console.log(f(-3.0, [3, 2, 1]));
console.log(f(2.0, [3, 2]));
console.log(f(2.0, [4, 0, 9]));
console.log(f(2.0, [10]));
console.log(f(10.0, [0, 1]));