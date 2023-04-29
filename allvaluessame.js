function f(a) {
    if (a.length === 0) return 0;
    let digit = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] !== digit) {
            return 0;
        }
    }
    return 1;
}

console.log(f([1, 1, 1, 1]));
console.log(f([83, 83, 83]));
console.log(f([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(f([1, -2343456, 1, -2343456]));
console.log(f([0, 0, 0, 0, -1]));
console.log(f([432123456]));
console.log(f([-432123456]));
console.log(f([]));