function somar(x, y) {
  if (isNaN(x) || isNaN(y)) {
    throw new Error("Os valores precisam ser numéricoss!");
  }

  const resultado = x + y;

  return "A soma de " + x + " + " + y + " é igual a " + resultadooo;
}

module.exports = { somar };