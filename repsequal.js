function f(a, n) {
    let sum = 0;

    for (let i = a.length - 1, j = 0; i >= 0; i--) {
        sum += Math.pow(10, j++) * a[i];
    }
    if (n !== sum) return 0;
    return 1;
}

console.log(f([3, 2, 0, 5, 3], 32053));
console.log(f([3, 2, 0, 5], 32053));
console.log(f([3, 2, 0, 5, 3, 4], 32053));
console.log(f([2, 3, 0, 5, 3], 32053));
console.log(f([9, 3, 1, 1, 2], 32053));
console.log(f([0, 3, 2, 0, 5, 3], 32053));
console.log(f([1, 2, 3, 4, 5], 12345));
console.log(f([1, 2], 12));
console.log(f([0, 0, 0, 9, 0, 8, 7, 6, 5, 4, 3], 90876543));