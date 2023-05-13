function f(a) {
    if (a.length < 2) return 0;
    let i, j, k = 0,
        count = 0,
        len = a.length;
    let pairs = new Array(len * (len - 1) / 2);

    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (a[i] > 0 && a[j] > 0) {
                pairs[k++] = a[i] + a[j];
            }
        }
    }

    for (i = 0; i < k; i++) {
        for (j = 2;; j++) {
            if (pairs[i] === j * j) {
                ++count;
                break;
            }
            if (pairs[i] < j * j) {
                break;
            }
        }
    }

    return count;
}

console.log("Number of square-pairs in {9, 0, 2, -5, 7} is: " + f([9, 0, 2, -5, 7]));
console.log("Number of square-pairs in {9} is: " + f([9]));
console.log("Number of square-pairs in {3, 0, 6, 10, 15, -17, 1, 9} is: " + f([3, 0, 6, 10, 15, -17, 1, 9]));