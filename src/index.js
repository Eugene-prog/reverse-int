module.exports = function reverse(n) {
    const num = Math.abs(n);
    return +String(num).split("").reverse().join("");
};
