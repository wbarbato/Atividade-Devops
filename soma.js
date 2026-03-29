function somar(x, y) {
  if (isNaN(x) || isNaN(y)) {
    throw new Error("Os valores precisam ser numéricos!");
  }

  const resultado = x + y;

  return "A soma de " + x + " + " + y + " é igual a " + resultado;
}

module.exports = { somar };