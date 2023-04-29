function layered(a) {
    if (a.length < 2) return 0;
    let result = 1,
        len = a.length,
        prev = a[0],
        count = 1;
    for (let i = 1; i < len; i++) {
        if (a[i] === prev) ++count;
        else {
            if (a[i] < prev || count < 2) {
                result = 0;
                break;
            } else {
                count = 1;
                prev = a[i];
            }
        }
    }
    return result;
}

console.log(f([1, 1, 2, 2, 2, 3, 3]));
console.log(f([3, 3, 3, 3, 3, 3, 3]));
console.log(f([1, 2, 2, 2, 3, 3]));
console.log(f([2, 2, 2, 3, 3, 1, 1]));
console.log(f([2]));
console.log(f([]));
console.log(f([1, 1, 2, 2]));