//nextperfectsquare//

function david(n) {
    if (n < 0) return 0;
    return Math.pow(Math.ceil(Math.sqrt(n)), 2);
}

console.log("Next perfect square to 7 is: " + david(6));
console.log("Next perfect square to 7 is: " + david(36));
console.log("Next perfect square to 7 is: " + david(0));
console.log("Next perfect square to 7 is: " + david(-5));