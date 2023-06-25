function f(a1, a2) {
    if (a1.length !== a2.length) return 0;

    const copya1 = a1.slice().sort();
    const copya2 = a2.slice().sort();

    for (let i = 0; i < a1.length; i++) {
        if (copya2[i] !== copya1[i]) return 0;
    }

    return 1;
}

console.log(f(['p', 'o', 'l', 'l'], ['l', 'o', 'p', '0']));
console.log(f(['b', 'e', 'a', 'r'], ['s', 't', 'a', 'r']));
console.log(f(['s', 'i', 't'], ['i', 't', 's']));