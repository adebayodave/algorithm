//loop sum//
function iyanu(a, n) {
    let i = 0,
        j = 0,
        sum = 0;
    for (i = 0, j = 0; i < n; i++) {
        if (j >= a.length) j = 0;
        sum += a[j++];
    }

    return sum;
}

console.log(iyanu([1, 2, 3], 2));
console.log(iyanu([-1, 2, -1], 7));
console.log(iyanu([1, 4, 5, 6], 4));