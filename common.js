function common(first, second) {
    if (first === null || second === null) return null;
    if (first.length === 0 || second.length === 0) return [];

    let i, j, k = 0;
    const len = Math.min(first.length, second.length);
    let a, b, temp = new Array(len);

    if (first.length <= second.length) {
        a = first;
        b = second;
    } else {
        a = second;
        b = first;
    }

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < b.length; j++) {
            if (a[i] === b[j]) temp[k++] = a[i];
        }
    }

    const common = new Array(k);
    for (i = 0; i < k; i++) common[i] = temp[i];
    return common;
}

console.log("The common array is: " + JSON.stringify(common([1, 8, 3, 2], [4, 2, 6, 1])));
console.log("The common array is: " + JSON.stringify(common([1, 8, 3, 2, 6], [2, 6, 1])));
console.log("The common array is: " + JSON.stringify(common([1, 3, 7, 9], [7, 1, 9, 3])));
console.log("The common array is: " + JSON.stringify(common([1, 2], [3, 4])));
console.log("The common array is: " + JSON.stringify(common([], [1, 2, 3])));
console.log("The common array is: " + JSON.stringify(common([1, 2], [])));
console.log("The common array is: " + JSON.stringify(common([1, 2], null)));
console.log("The common array is: " + JSON.stringify(commo(null, [])));
console.log("The common array is: " + JSON.stringify(common(null, null)));