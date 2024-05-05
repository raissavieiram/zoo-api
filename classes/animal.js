class Animal {
  // Método construtor da classe Animal que recebe nome, espécie e felicidade
  constructor(nome, especie, felicidade) {
    this.nome = nome;
    this.especie = especie;
    this.felicidade = felicidade;
  }

  // Método alimentar que recebe uma quantidade e incrementa a felicidade do animal
  alimentar(quantidade) {
    this.felicidade += quantidade;
    if (quantidade > 0) {
      console.log(
        `${this.nome} comeu e ficou mais feliz! Felicidade: ${this.felicidade}`
      );
    } else if (quantidade < 0) {
      console.log(
        `${this.nome} comeu e ficou menos feliz! Felicidade: ${this.felicidade}.`
      );
    } else {
      console.log(
        `${this.nome} comeu, mas sua felicidade não mudou. Felicidade: ${this.felicidade}.`
      );
    }
  }
}

module.exports = Animal;
