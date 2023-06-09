const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se `count` retorna a quantidade correta de elefantes', () => {
    expect(4).toBe(handlerElephants('count'));
  });

  it('testa se `names` retorna todos os nomes dos elefantes residentes', () => {
    expect(['Ilana', 'Orval', 'Bea', 'Jefferson']).toStrictEqual(handlerElephants('names'));
  });

  it('testa se `averageAge`  retorna as media correta de idades dos elefantes', () => {
    expect(10.5).toBe(handlerElephants('averageAge'));
  });

  it('testa se `location` retorna a posicão correta dos elefantes', () => {
    expect('NW').toBe(handlerElephants('location'));
  });

  it('testa se `popularity` retorna a popularidade correta dos elefantes', () => {
    expect(5).toBe(handlerElephants('popularity'));
  });

  it('testa se `availability` retorna a quantidade correta de dias que é possivel visitar elefantes', () => {
    expect(['Friday', 'Saturday', 'Sunday', 'Tuesday']).toStrictEqual(handlerElephants('availability'));
  });

  it('testa se ao receber o paramentro `undefined` a função retorna undefined', () => {
    expect(undefined).toBe(handlerElephants());
  });

  it('testa se ao receber receber um parametro diferente de uma `string` retorna "Parâmetro inválido, é necessário uma string"', () => {
    expect('Parâmetro inválido, é necessário uma string').toEqual(handlerElephants(!typeof 'string'));
  });

  it('se a `string` passada não comtempla nenhuma funcionalidade retorna `null`', () => {
    expect(handlerElephants('Availability')).toBe(null);
  });
});
