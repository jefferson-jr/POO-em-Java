class Personagem {
  constructor(nome, clone, poder, invocacao, velocidade) {
    // atributos
    this.nome = nome;
    this.clone = clone;
    this.poder = poder;
    this.invocacaao = invocacao;
    this.velocidade = velocidade;
  }
  //Metodos
  poderEspecial() {
    console.log(`rasegan ${this.poder}!`);
  }
  mostrarInvocacao() {
    console.log(`naruto invoca um sapo  ${this.invocacao}!`);
  }
  mostrarClone() {
    console.log(`naruto clona ele mesmo ${this.clone}!`);
  }
}

const personagem1 = new Personagem(`naruto`, 200, 10.0, `sapo`, 7.0);
personagem1.poderEspecial();
personagem1.mostrarInvocacao();
personagem1.mostrarClone(); 





