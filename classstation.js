function f(a) {
    if (a.length === 0) return 0;
    let i, count = 0,
        n = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] === 1) ++n;
    }
    for (i = 0; i < a.length; i++) {
        if (a[i] === n) ++count;
    }

    return count;
}

console.log("stanton measure for [1, 4, 3, 2, 1, 2, 3, 2] is: " + f([1, 4, 3, 2, 1, 2, 3, 2]));
console.log("stanton measure for [1] is: " + f([1]));
console.log("stanton measure for [0] is: " + f([0]));
console.log("stanton measure for [3, 1, 1, 4] is: " + f([3, 1, 1, 4]));
console.log("stanton measure for [1, 3, 1, 1, 3, 3, 2, 3, 3, 3, 4] is: " + f([1, 3, 1, 1, 3, 3, 2, 3, 3, 3, 4]));
console.log("stanton measure for [] is: " + f([]));