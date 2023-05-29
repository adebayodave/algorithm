function hasnvalue(a, n) {
    let i, j, prev, result = 1,
        len = a.length,
        count = 1;
    let temp = a.slice();

    for (i = 0; i < len; i++) {
        for (j = 0; j < len; j++) {
            if (temp[i] > temp[j]) {
                prev = temp[i];
                temp[i] = temp[j];
                temp[j] = prev;
            }
        }
    }

    prev = temp[0];
    for (i = 1; i < len; i++) {
        if (prev !== temp[i]) ++count;
        if (count > n) {
            result = 0;
            break;
        }
        prev = a[i];
    }

    if (count !== n) result = 0;
    return result;
}

console.log(hasnvalue([1, 2, 2, 1], 2));
console.log(hasnvalue([1, 1, 1, 8, 1, 1, 1, 3, 3], 3));
console.log(hasnvalue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));
console.log(hasnvalue([1, 2, 2, 1], 3));
console.log(hasnvalue([1, 1, 1, 8, 1, 1, 1, 3, 3], 2));
console.log(hasnvalue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20));