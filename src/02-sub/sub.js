const sub = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "los argumentos deben ser numeros enteros";
    }
    const result = Math.abs(num1 - num2);
    return result >= 100 ? "la resta sobrepasó los limites" : result;
};
  
module.exports = sub;