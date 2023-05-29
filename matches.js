function matches(a, p) {
    if (a.length === 0 || p.length === 0 || a.length < p.length) return 0;
    let i, j, count, negative, pos = 0,
        total = 0;

    for (i = 0; i < p.length; i++) {
        if (p[i] < 0) {
            count = -1 * p[i];
            negative = 1;
        } else {
            count = p[i];
            negative = 0;
        }
        total += count;
        if (total > a.length) return 0;
        for (j = 0; j < count; j++) {
            if (negative === 1 && a[pos++] > 0) return 0;
            if (negative === 0 && a[pos++] < 0) return 0;
        }
    }
    return 1;
}

console.log("Match status for [1, 2, 3, -5, -5, 2, 3, 18] and [3, -2, 3] is: " + matches([1, 2, 3, -5, -5, 2, 3, 18], [3, -2, 3]));
console.log("Match status for [1, 2, 3, -5, -5, 2, 3, 18] and [2, 1, -1, -1, 2, 1] is: " + matches([1, 2, 3, -5, -5, 2, 3, 18], [2, 1, -1, -1, 2, 1]));
console.log("Match status for [1, 2, 3, -5, -5, 2, 3, 18] and [1, 2, -1, -1, 1, 2] is: " + matches([1, 2, 3, -5, -5, 2, 3, 18], [1, 2, -1, -1, 1, 2]));
console.log("Match status for [1, 2, 3, -5, -5, 2, 3, 18] and [4, -1, 3] is: " + matches([1, 2, 3, -5, -5, 2, 3, 18], [4, -1, 3]));
console.log("Match status for [2, -3, 3] and [4, -1, 3] is: " + matches([2, -3, 3], [4, -1, 3]));
console.log("Match status for [8] and [4, -1, 3] is: " + matches([8], [4, -1, 3]));