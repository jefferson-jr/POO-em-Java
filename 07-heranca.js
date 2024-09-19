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