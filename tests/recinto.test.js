const Recinto = require('../classes/recinto');

describe('Testes para a classe Recinto', () => {
  test('deve criar um recinto com os valores corretos', () => {
    const recinto = new Recinto('cachorro');
    expect(recinto.especie).toBe('cachorro');
    expect(recinto.animais).toEqual([]);
    expect(recinto.condicao).toBe('bem cuidado');
  });

  describe('Operações no Recinto', () => {
    let recinto;
    let animal1;
    let animal2;
    let animal3;

    beforeEach(() => {
      recinto = new Recinto('cachorro');
      animal1 = { nome: 'Bob', especie: 'cachorro', felicidade: 50, alimentar: jest.fn()};
      animal2 = {nome: 'Felix', especie:'cachorro', felicidade: 60, alimentar: jest.fn()};
      animal3 = { nome: 'Marley', especie: 'gato', felicidade: 50, alimentar: jest.fn()};
    });

    test('deve adicionar um animal ao recinto', () => {
      recinto.adicionarAnimal(animal1);
      expect(recinto.animais).toContain(animal1);
    });

    test('não deve adicionar um animal de espécie diferente ao recinto', () => {
      recinto.adicionarAnimal(animal3);
      expect(recinto.animais).not.toContain(animal3);
    });

    test('deve alimentar todos os animais do recinto', () => {
      recinto.adicionarAnimal(animal1);
      recinto.adicionarAnimal(animal2);
      recinto.alimentarAnimais(10);
      expect(recinto.animais[0].alimentar).toHaveBeenCalledWith(10);
      expect(recinto.animais[1].alimentar).toHaveBeenCalledWith(10);
    });

    test('deve alterar a condição do recinto', () => {
      recinto.alterarCondicao('mal cuidado');
      expect(recinto.condicao).toBe('mal cuidado');
    });

    test('não deve alterar a condição do recinto para uma condição inválida', () => {
      recinto.alterarCondicao('condição inválida');
      expect(recinto.condicao).toBe('bem cuidado');
    });
  });
});
