function f(a) {
    if (a.length === 0) return 0;

    let temp, result = 1;
    const temparray = [...a];

    for (let i = 0; i < temparray.length; i++) {
        for (let j = 0; j < temparray.length; j++) {
            if (temparray[i] < temparray[j]) {
                temp = temparray[i];
                temparray[i] = temparray[j];
                temparray[j] = temp;
            }
        }
    }

    for (let i = 0; i < temparray.length; i++) {
        if (temparray[i] !== i) {
            result = 0;
            break;
        }
    }

    return result;
}

console.log(f([1, 2, 0, 3]));
console.log(f([3, 2, 1, 0]));
console.log(f([1, 2, 4, 3]));
console.log(f([0, 2, 3]));
console.log(f([0]));
console.log(f([]));