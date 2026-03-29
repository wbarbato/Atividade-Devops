function somar(x, y) {
  if (isNaN(x) || isNaN(y)) {
    throw new Error("Os valores precisam ser numéricosss!");
  }

  const resultado = x + y;

  return "A soma de " + x + " + " + y + " é igual a " + resultaddo;
}

module.exports = { somar };