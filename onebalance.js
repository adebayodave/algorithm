function f(a) {
    let left = 0,
        mid = 0,
        right = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            if (mid === 0) ++left;
            else if (mid > 0) ++right;
        } else {
            if (right > 0) return 0;
            else if (left >= 0) ++mid;
        }
    }
    if (left + right === mid) return 1;
    return 0;
}

console.log(f([1, 1, 1, 2, 3, -18, 45, 1]));
console.log(f([1, 1, 1, 2, 3, -18, 45, 1, 0]));
console.log(f([1, 1, 2, 3, 1, -18, 26, 1]));
console.log(f([]));
console.log(f([3, 4, 1, 1]));
console.log(f([1, 1, 3, 4]));
console.log(f([3, 3, 3, 3, 3, 3]));
console.log(f([1, 1, 1, 1, 1, 1]));