const Zoologico = require('../classes/zoologico');
const Recinto = require('../classes/recinto');
const Animal = require('../classes/animal');

describe('Teste de Sistema do Zoológico', () => {
    let zoologico;

    beforeEach(() => {
        zoologico = new Zoologico();
    });

    test('operações completas do zoológico', () => {
        // Criação de recintos e animais
        const recintoCachorros = new Recinto('cachorro');
        const recintoGatos = new Recinto('gato');
        const cachorro1 = new Animal('Rex', 'cachorro', 50);
        const cachorro2 = new Animal('Max', 'cachorro', 40);
        const gato1 = new Animal('Whiskers', 'gato', 60);
        const gato2 = new Animal('Felix', 'gato', 70);

        // Adicionando animais aos recintos
        recintoCachorros.adicionarAnimal(cachorro1);
        recintoCachorros.adicionarAnimal(cachorro2);
        recintoGatos.adicionarAnimal(gato1);
        recintoGatos.adicionarAnimal(gato2);

        // Adicionando recintos ao zoológico
        zoologico.adicionarRecinto(recintoCachorros);
        zoologico.adicionarRecinto(recintoGatos);

        // Alimentando animais
        recintoCachorros.alimentarAnimais(10);
        recintoGatos.alimentarAnimais(-5);

        //Alterando condição do recinto
        recintoGatos.alterarCondicao('mal cuidado');

        // Recebendo visitantes
        zoologico.receberVisitantes();

        // Cálculo da felicidade média, visitantes e receita
        const felicidadeEsperada = ((50 + 10) + (40 + 10) + (60 - 5) + (70 - 5)) / 4;
        const numeroVisitantesEsperado = (100 + (Math.round(felicidadeEsperada) + 1) * 10);
        const receitaEsperada = numeroVisitantesEsperado * 20;

        // Verificação dos resultados
        expect(zoologico.recintos).toHaveLength(2);
        expect(zoologico.recintos[0].especie).toBe('cachorro');
        expect(zoologico.recintos[0].animais).toHaveLength(2);
        expect(zoologico.recintos[0].condicao).toBe('bem cuidado');
        expect(zoologico.recintos[1].especie).toBe('gato');
        expect(zoologico.recintos[1].animais).toHaveLength(2);
        expect(zoologico.recintos[1].condicao).toBe('mal cuidado');
        expect(zoologico.calcularFelicidadeMedia()).toBeCloseTo(felicidadeEsperada);
        expect(zoologico.caixa).toBe(receitaEsperada);
    });
});
