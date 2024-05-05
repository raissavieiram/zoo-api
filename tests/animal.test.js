const Animal = require('../classes/animal');

describe('Testes para a classe Animal', () => {
  test('deve criar um animal com os valores corretos', () => {
    const animal = new Animal('Bob', 'cachorro', 50);
    expect(animal.nome).toBe('Bob');
    expect(animal.especie).toBe('cachorro');
    expect(animal.felicidade).toBe(50);
  });

  describe('Testes para o método alimentar', () => {
    let animal;

    beforeEach(() => {
      animal = new Animal('Bob', 'cachorro', 50);
    });

    test('deve aumentar a felicidade do animal quando alimentado positivamente', () => {
      animal.alimentar(10);
      expect(animal.felicidade).toBe(60);
    });

    test('deve diminuir a felicidade do animal quando alimentado negativamente', () => {
      animal.alimentar(-20);
      expect(animal.felicidade).toBe(30);
    });

    test('a felicidade do animal não deve mudar quando alimentado com zero', () => {
      animal.alimentar(0);
      expect(animal.felicidade).toBe(50);
    });
  });
});
