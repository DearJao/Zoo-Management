const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const dayError = 'The day must be valid. Example: Monday';

  const expected = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };

  const openedZoo = 'The zoo is open';

  const closedZoo = 'The zoo is closed';

  it('retorna todos os dias da semana caso não exista argumentos', () => {
    expect(expected).toStrictEqual(getOpeningHours());
  });

  it('retorna `the zoo is open` para o parametro `Monday, 09:00-AM`', () => {
    expect(openedZoo).toEqual(getOpeningHours('Sunday', '09:00-AM'));
  });

  it('retorna `the zoo is closed` para o paramentro `Monday, 09:00-AM`', () => {
    expect(closedZoo).toEqual(getOpeningHours('Monday', '09:00-AM'));
  });

  it('retorna `the zoo is open` para o paremetro `Tuesday, 09:00-AM`', () => {
    expect(openedZoo).toEqual(getOpeningHours('Tuesday', '09:00-AM'));
  });

  it('retorna `the zoo is open` para o paremetro `Wednesday, 09:00-PM`', () => {
    expect(closedZoo).toEqual(getOpeningHours('Wednesday', '09:00-PM'));
  });

  it('retorna `the zoo is open` para o paremetro `Thursday, 09:00-AM`', () => {
    expect(openedZoo).toEqual(getOpeningHours('Tuesday', '09:00-AM'));
  });

  it('retorna `the zoo is open` para o paremetro `Friday, 09:00-AM`', () => {
    expect(openedZoo).toEqual(getOpeningHours('Tuesday', '09:00-AM'));
  });

  it('retorna `the zoo is open` para o paremetro `Saturday, 09:00-AM`', () => {
    expect(openedZoo).toEqual(getOpeningHours('Tuesday', '09:00-AM'));
  });

  it('retorna `The abbreviation must be \'AM\' or \'PM\'` para `Friday, 09:00-ZM`', () => {
    expect(() => { getOpeningHours('Wednesday', '09:00-AP'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('retorna `The hour should represent a number` para os parametros `Saturday e C9:00-AM`', () => {
    expect(() => { getOpeningHours('Wednesday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
  });

  it('retorna `The minutes should represent a number` para os parametros `Sunday, 09:c0-AM`', () => {
    expect(() => { getOpeningHours('Monday', '09:c0-AM'); }).toThrow('The minutes should represent a number');
  });

  it('retorna `The hour must be between 0 and 12` para os parametros `Wednesday, 13:00-AM`', () => {
    expect(() => { getOpeningHours('Wednesday', '13:00-AM'); }).toThrow('The hour must be between 0 and 12');
  });

  it('retorna `The minutes must be between 0 and 59` para os parametros `Wednesday`, `10:67-AM`', () => {
    expect(() => { getOpeningHours('Wednesday', '10:67-AM'); }).toThrow('The minutes must be between 0 and 59');
  });

  it('retorna invalido para os argumentos `Webnesday, 10:00-AM`', () => {
    expect(() => { getOpeningHours('Webnesday', '10:00-AM'); }).toThrow(dayError);
  });
});
