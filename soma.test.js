const { somar } = require('./soma');

test("Deve somar dois números corretamente", () => {
  const resultado = somar(5, 5);

  expect(resultado).toBe("A soma de 5 + 5 é igual a 10);
});

test("Deve lançar erro se não for número", () => {
  expect(() => {
    somar("a", 5);
  }).toThrow("Os valores precisam ser numéricos!");
});