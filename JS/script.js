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

// Método keys

const objeto = {
    nome: "Joaquim",
    idade: 21
};

const chaves = Object.keys(objeto);

console.log(chaves);

// Mutação - Atribuição

const  hospede = {
    nome: "Alberto"
};

hospede.nome = "Junior";
console.log(hospede);

// Mutação - Inserção

hospede.sobrenome = "Lima"

console.log(hospede);

// Mutação - Operador de adição

const hospedeNovo = {
    nome: "Mariana",
    idade: 56
};

hospedeNovo.idade += 2;

console.log(hospedeNovo.idade);

// Multação - deletar

delete hospedeNovo.nome;
console.log(hospedeNovo);

// Método string: trim

const textoEspacado = "          Esta é uma string com espaços em branco   "

const textoSemEspacos = textoEspacado.trim();

console.log(textoSemEspacos);

// PadStart

const numero = "1234";
// *** Preencher com zeros para atingir 8 caracteres ***
const numeroFormatado = numero.padStart(8, "0");
console.log(numeroFormatado);

const codigo = "ABC";
// Preencher com traços para atingir 5 caracteres
const codigoPreenchido = codigo.padStart(5, "-");
console.log(codigoPreenchido);

