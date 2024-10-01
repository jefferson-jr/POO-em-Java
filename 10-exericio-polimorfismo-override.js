// Classe base MitologiaGrega
class MitologiaGrega {
  constructor(nome, vida, altura, idade, genero) {
    this.nome = nome;
    this.vida = vida; 
    this.altura = altura;
    this.idade = idade;
    this.genero = genero;
  }

  ataque() {
    console.log(`${this.nome} realiza um ataque com o punho!`);
  }

  voar() {
    console.log(`${this.nome} possui a habilidade de voar!`); 
  }
}

class Hades extends MitologiaGrega {
  constructor(
    nome,
    vida,
    altura,
    idade,
    genero,
    invisibilidade,
    caoDeTresCabeca
  ) {
    super(nome, vida, altura, idade, genero);
    this.invisibilidade = invisibilidade;
    this.caoDeTresCabeca = caoDeTresCabeca;
  }

  ataque() {
    console.log(
      `${this.nome} ataca com a ${this.invisibilidade} e com furtividade!`
    );
  }

  voar() {
    console.log(
      `${this.nome} recebeu a habilidade de voar por tempo ilimitado em cima de uma nuvem.`
    );
  }
}

class Hercules extends MitologiaGrega {
  constructor(nome, vida, altura, idade, genero, superForca, superPulo) {
    super(nome, vida, altura, idade, genero);
    this.superForca = superForca;
    this.superPulo = superPulo;
  }

  ataque() {
    console.log(`${this.nome} ataca com a espada e com a super forca!`);
  }

  voar() {
    console.log(
      `${this.nome} aprendeu habilidade de voar super rapido!`
    );
  }
}


const hades = new Hades(
  "Hades",
  1500,
  3.0,
  3000,
  "Homem",
  "capa da invisibilidade",
  "cão de três cabeças"
);
hades.ataque();
hades.voar();

const hercules = new Hercules(
  "Hercules",
  1000,
  4.0,
  1000,
  "Homem",
  "super força",
  "super salto"
);
hercules.ataque();
hercules.voar();
