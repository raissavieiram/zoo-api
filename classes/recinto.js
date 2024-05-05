class Recinto {
  // Método construtor da classe Recinto que recebe a espécie do recinto e inicializa um array de animais e a condição do recinto
  constructor(especie) {
    this.especie = especie;
    this.animais = [];
    this.condicao = 'bem cuidado';
  }

  // Método adicionarAnimal que recebe um animal e adiciona ao array de animais do recinto
  adicionarAnimal(animal) {
    if (animal.especie !== this.especie) {
      console.log(
        `Não é possível adicionar um animal de espécie ${animal.especie} ao recinto de ${this.especie}`
      );
    } else {
      this.animais.push(animal);
      console.log(
        `${animal.nome} foi adicionado ao recinto de ${this.especie}`
      );
    }
  }

  // Método alimentarAnimais que recebe uma quantidade e chama o método alimentar de cada animal do recinto
  alimentarAnimais(quantidade) {
    this.animais.forEach((animal) => {
      animal.alimentar(quantidade);
    });
  }

  // Método alterarCondicao que recebe uma nova condição e altera a condição do recinto
  alterarCondicao(novaCondicao) {
    if (novaCondicao === 'bem cuidado' || novaCondicao === 'mal cuidado') {
      this.condicao = novaCondicao;
      console.log(`O recinto de ${this.especie} está ${this.condicao}.`);
    } else {
      console.log(`${novaCondicao} não é uma condição válida para um recinto.`);
    }
  }
}

module.exports = Recinto;
