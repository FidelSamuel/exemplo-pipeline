const { soma, subtracao } = require('../src/calculadora');

test('soma 1 + 2 para ser igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});

test('subtrai 4 - 2 para ser igual a 2', () => {
    expect(subtracao(4, 2)).toBe(2);
});
