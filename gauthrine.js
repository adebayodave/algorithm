function gauthrie(a) {
    let i, prev = a[0],
        current;
    if (a.length < 2 || a[a.length - 1] !== 1) return 0;

    for (i = 1; i < a.length; i++) {
        if (prev % 2 === 0) current = prev / 2;
        else current = prev * 3 + 1;
        if (current !== a[i]) return 0;
        prev = a[i];
    }
    return 1;
}

console.log("{7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1} gauthrie sequence status: " + gauthrie([7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]));
console.log("{8, 4, 2, 1} gauthrie sequence status: " + gauthrie([8, 4, 2, 1]));
console.log("{8, 17, 4, 1} gauthrie sequence status: " + gauthrie([8, 17, 4, 1]));
console.log("{8, 4, 1} gauthrie sequence status: " + gauthrie([8, 4, 1]));
console.log("{8, 4, 2} gauthrie sequence status: " + gauthrie([8, 4, 2]));