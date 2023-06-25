function f(a) {
    if (a.length < 2) return 0;
    let i, j, max = a[0],
        odd = 0;
    const oddArray = new Array(a.length);

    for (i = 0, j = 0; i < a.length; i++) {
        if (a[i] % 2 !== 0) oddArray[odd++] = a[i];
        if (a[i] > max) max = a[i];
    }
    if (max % 2 !== 0 || odd < 1) return 0;

    for (i = 0; i < odd; i++) {
        for (j = 0; j < a.length; j++) {
            if (a[j] % 2 === 0 && a[j] !== max && a[j] > oddArray[i]) return 0;
        }
    }

    return 1;
}

console.log("{1} inertial status: " + f([1]));
console.log("{2} inertial status: " + f([2]));
console.log("{1, 2, 3, 4} inertial status: " + f([1, 2, 3, 4]));
console.log("{1, 1, 1, 1, 1, 1, 2} inertial status: " + f([1, 1, 1, 1, 1, 1, 2]));
console.log("{2, 12, 4, 6, 8, 11} inertial status: " + f([2, 12, 4, 6, 8, 11]));
console.log("{2, 12, 12, 4, 6, 8, 11} inertial status: " + f([2, 12, 12, 4, 6, 8, 11]));
console.log("{-2, -4, -6, -8, -11} inertial status: " + f([-2, -4, -6, -8, -11]));
console.log("{2, 3, 5, 7} inertial status: " + f([2, 3, 5, 7]));
console.log("{2, 4, 6, 8, 10} inertial status: " + f([2, 4, 6, 8, 10]));