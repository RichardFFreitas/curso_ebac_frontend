function funcionario(nome, cargo, idade, salario){
    this.nome = nome;
    this.idade = idade
    this.cargo = cargo

    let _salario = salario

    this.getSalario = function () {
        return _salario
    }

    this.setSalario = function(valor){
        if(typeof valor === 'number') {
            return _salario = valor 
        }
    }
} 

function FullStack(nome, cargo, idade, salario) {
    funcionario.call(this, nome, cargo, idade, salario)
}

function WebDesign(nome, cargo, idade, salario){
    funcionario.call(this, nome, cargo, idade, salario)
}

function BackEnd(nome, cargo, idade, salario){
    funcionario.call(this, nome, cargo, idade, salario)
}

const funcionario1 = new FullStack('Richard Felipe', 'Desenvolvedor Full Stack', 22, 2000)

const funcionario2 = new WebDesign('Julio Cezar', 'Web Design', 23, 1500)

const funcionario3 = new BackEnd('Alexys', 'Desenvolvedor Back-End', 23, 4000)


console.log(funcionario1);
console.log(funcionario1.getSalario());

console.log(funcionario2);
console.log(funcionario2.getSalario());

console.log(funcionario3);
console.log(funcionario3.getSalario());