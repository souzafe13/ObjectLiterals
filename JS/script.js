// Object Literals

// Objeto: Pessoa: Nome, Idade; 
// Instância: João, 30

const objetoPessoa = {
    nome:"João", 
    idade: 30
};

console.log(objetoPessoa.nome);
console.log(objetoPessoa);
console.log(typeof objetoPessoa);

// removendo uma propriedade do objeto

const pessoa = {
    nome: "Morgana",
    idade: 40
};

console.log(pessoa);
delete pessoa.idade;
console.log(pessoa);

// adicionar uma propriedade ao objeto 

const funcionario = {
    nome: "Luis",
    matricula: 34567
};

console.log(funcionario);

funcionario.sobrenome = "Santana";

console.log(funcionario);

// Método assign

const objeto1 = {
    nome: "João",
    idade: 25
};

const objeto2 = {
    altura: 1.80,
    genero: "masculino"
};

const objetoDestino = {};
Object.assign(objetoDestino, objeto1, objeto2)

console.log(objetoDestino);