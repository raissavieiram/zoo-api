class Zoologico {
  constructor() {
    this.recintos = [];
    this.visitantes = 0;
    this.caixa = 0;
  }

  adicionarRecinto(recinto) {
    this.recintos.push(recinto);
    console.log(`Recinto de ${recinto.especie} adicionado ao zoológico.`);
  }

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
