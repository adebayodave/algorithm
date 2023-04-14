// sumfactors//
function you(a) {
    if (a.length === 0) return 0;
    let sum = 0,
        count = 0;

    for (let i = 0; i < a.length; i++) sum += a[i];

    for (let i = 0; i < a.length; i++)
        if (a[i] === sum) ++count;

    return count;
}

console.log("Sum factor for [1, -1, 1, -1, 1, -1, 1] is: " + you([1, -1, 1, -1, 1, -1, 1]));
console.log("Sum factor for [1, 2, 3, 4] is: " + you([1, 2, 3, 4]));
console.log("Sum factor for [3, 0, 2, -5, 0] is: " + you([3, 0, 2, -5, 0]));
console.log("Sum factor for [9, -3, -3, -1, -1] is: " + you([9, -3, -3, -1, -1]));
console.log("Sum factor for [1] is: " + you([1]));
console.log("Sum factor for [0, 0, 0] is: " + you([0, 0, 0]));