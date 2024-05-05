const Zoologico = require('../classes/zoologico');

describe('Testes para a classe Zoologico', () => {
  test('deve criar um zoológico com os valores das propriedades padrão', () => {
    const zoologico = new Zoologico();
    expect(zoologico.recintos).toEqual([]);
    expect(zoologico.caixa).toBe(0);
  });

  describe('Operações no Zoologico', () => {
    let zoologico;
    let recinto1;
    let recinto2;

    beforeEach(() => {
      zoologico = new Zoologico();
      recinto1 = {
        especie: 'cachorro',
        animais: [{ felicidade: 40 }, { felicidade: 60 }],
        condicao: 'bem cuidado',
      };
      recinto2 = {
        especie: 'gato',
        animais: [{ felicidade: 50 }, { felicidade: 70 }],
        condicao: 'mal cuidado',
      };
    });

    test('deve adicionar um recinto ao zoológico', () => {
      zoologico.adicionarRecinto(recinto1);
      expect(zoologico.recintos).toHaveLength(1);
      expect(zoologico.recintos[0].especie).toBe(recinto1.especie);
      expect(zoologico.recintos[0].animais).toEqual(recinto1.animais);
      expect(zoologico.recintos[0].condicao).toBe(recinto1.condicao);
    });

    test('deve calcular a média de felicidade corretamente', () => {
      zoologico.adicionarRecinto(recinto1);
      zoologico.adicionarRecinto(recinto2);

      const mediaEsperada = 55;
      const media = zoologico.calcularFelicidadeMedia();

      expect(media).toBe(mediaEsperada);
    });

    test('deve calcular a felicidade média como zero quando não há animais', () => {
      const media = zoologico.calcularFelicidadeMedia();
      expect(media).toBe(0);
    });

    test('deve receber visitantes corretamente', () => {
      zoologico.adicionarRecinto(recinto1);
      zoologico.adicionarRecinto(recinto2);

      zoologico.receberVisitantes();
      const visitantesEsperados = 660;
      const receitaEsperada = 13200;

      expect(zoologico.caixa).toBe(receitaEsperada);
      expect(zoologico.numeroVisitantes).toBe(visitantesEsperados);
    });
  });
});
