// Class base Personagem 
class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    
    atacar() {
        console.log(`${this.nome} realizar um ataque basico!`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}

class Guerreiro extends Personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }

    atacar() {
            console.log(`${this.nome} ataca com a ${this.arma}!`);
        }
}

class Mago extends Personagem {
  constructor(nome, vida, arma) {
    super(nome, vida);
    this.feitico = feitico;
  }

  atacar() {
    console.log(`${this.nome} lança ${this.feitico}!`);
  }
}