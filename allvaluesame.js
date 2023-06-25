function f(a) {
    if (a.length === 0) return 0;

    const digit = a[0];
    let result = 1;

    for (let i = 1; i < a.length; i++) {
        if (a[i] !== digit) {
            result = 0;
            break;
        }
    }

    return result;
}

console.log(f([1, 1, 1, 1]));
console.log(f([83, 83, 83]));
console.log(f([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(f([1, -2343456, 1, -2343456]));
console.log(f([0, 0, 0, 0, -1]));
console.log(f([432123456]));
console.log(f([-432123456]));
console.log(f([]));