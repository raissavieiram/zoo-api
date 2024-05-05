class Animal {
  constructor(nome, especie, felicidade) {
    this.nome = nome;
    this.especie = especie;
    this.felicidade = felicidade;
  }

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
