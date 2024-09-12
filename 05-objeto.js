class Pessoa {
    constructor(nome, idade, altura, peso) { // Atributos 
        // Inicialização dos atributos
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    // Método
    Falar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}
// Objeto/Instancia "pessoa" criada apartir da classe Pessoa
const pessoa1 = new Pessoa(`Wanderson`, 40, 1.65, 70.0);
pessoa1.falar(); // Chamada do método falar() da classe Pessoa