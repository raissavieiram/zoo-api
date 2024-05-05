class Recinto {
  constructor(especie) {
    this.especie = especie;
    this.animais = [];
    this.condicao = 'bem cuidado';
  }

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

  alimentarAnimais(quantidade) {
    this.animais.forEach((animal) => {
      animal.alimentar(quantidade);
    });
  }

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
