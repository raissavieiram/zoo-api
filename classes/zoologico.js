class Zoologico {
  // Método construtor da classe Zoologico que inicializa um array de recintos, o número de visitantes e a receita do zoológico
  constructor() {
    this.recintos = [];
    this.visitantes = 0;
    this.caixa = 0;
  }

  // Método adicionarRecinto que recebe um recinto e adiciona ao array de recintos do zoológico
  adicionarRecinto(recinto) {
    this.recintos.push(recinto);
    console.log(`Recinto de ${recinto.especie} adicionado ao zoológico.`);
  }

  // Método calcularFelicidadeMedia que calcula a felicidade média dos animais do zoológico
  calcularFelicidadeMedia() {
    let totalFelicidade = 0;
    let contadorAnimais = 0;
    this.recintos.forEach(recinto => {
        recinto.animais.forEach(animal => {
            totalFelicidade += animal.felicidade;
            contadorAnimais++;
        });
    });
    return contadorAnimais > 0 ? totalFelicidade / contadorAnimais : 0;
}

  // Método receberVisitantes que calcula o número de visitantes e a receita do zoológico com base na felicidade média dos animais e na condição dos recintos
  receberVisitantes() {
    const felicidadeMedia = Math.round(this.calcularFelicidadeMedia());
    const recintosBemCuidados = this.recintos.filter(recinto => recinto.condicao === 'bem cuidado').length;

    this.numeroVisitantes = 100 + (felicidadeMedia + recintosBemCuidados) * 10;

    let receita = this.numeroVisitantes * 20;
    this.caixa += receita;

    console.log(`O zoológico recebeu ${this.numeroVisitantes} visitantes. A receita foi de R$${receita}.`);
  }
}

module.exports = Zoologico;
