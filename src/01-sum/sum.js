function sum(a, b) {
    if (a === undefined || b === undefined) {
        return "hubo error con los argumentos";
    }
    return a + b;
}

module.exports = sum;