// Classe base Pesooa 
class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}


// Classe Estudante que herda de Pessoa 
class Estudante extends Pessoa {
    constructor(nome, idade, altura, peso,curso) {
        super(nome, idade, altura, peso);
        this.curso = curso;
    }
}


// Classe Funcionario que herda de Pessoa 
class Funcionario extends Pessoa {
    constructor(nome, idade, altura, peso,salario) {
        super(nome, idade, altura, peso);
        this.salario = salario;
    }
}


 // Classe Diretor que herda de Pessoa 
class Diretor extends Funcionario {
    constructor(nome, idade, altura, peso,salario) {
        super(nome, idade, altura, peso, salario);
    }
}

 // Classe Professor que herda de Pessoa 
class Professor extends Funcionario {
    constructor(nome, idade, altura, peso,salario) {
        super(nome, idade, altura, peso, salario);
    }
}


const aluno = new Estudante("João", 16, 1.70, 70, "Programação de Jogos Digitais");
const Diretor = new Diretor("Sergio", 45, 1.65, 65, 3000);
const Professor = new Professor("Wanderson", 40, 1.65, 70, 1000);

console.log(aluno);
console.log(direitor);
console.log(professor);