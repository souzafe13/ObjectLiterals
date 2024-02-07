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

// Split 

const texto = "Essa é uma string com espaços em branco";

//Divide a string em um array de letras, usando espaços como separadores

const letras = texto.split("");
console.log(letras);

// Divide a string em um Array de números, usando vírgulas como separadores

const numeros2 = "1, 2, 3, 4, 5".split("");
console.log(numeros2);

// Divide o texto em string separadas por palavras

const partes = texto.split(" ", 8);
console.log(partes);

// Join

const numerosJoin = [1, 2, 3, 4, 5];

//Transforma um Array em uma string

const listaNumeros = numerosJoin.join();
console.log(numerosJoin);
console.log(typeof numerosJoin);
console.log(listaNumeros);
console.log(typeof listaNumeros);

// Transforma o Array em uma string, com traços como separador

const listaNumerostracos = numerosJoin.join("-");
console.log(listaNumerostracos);

// Transforma os elementos de um Array em string e acrescenta um elemento de string

const frutas = ["maçã", "banana", "laranja"];
const textoFrutas = frutas.join(" e ");
console.log(textoFrutas);

// Repeat

const testandoRepeat = "Poperrrr";

// Repetindo a string 3 vezes

const textoRepetido = testandoRepeat.repeat(3);
console.log(textoRepetido);

// Repetindo a string 0 vezes

const textoVazio = testandoRepeat.repeat(0);
console.log(textoVazio);

// rest operator

function minhaFuncao (a, b, ...args) {
console.log(a);
console.log(b);
console.log(args);
}

minhaFuncao(1, 2, 3, 4, 5);

// iterando sobre um array

const frutasA = ["maçã", "uva", "melancia"];

for(const fruta of frutasA){
    console.log(fruta);
};

// Desestruturando objetos

const usuario = {
    primeiroNome: "José",
    sobrenome: "Xavier",
    profissão: "Pedreiro"
}

const [primeiroNome, sobrenome, profissão] = Object.values(usuario);
console.log(primeiroNome, sobrenome, profissão);

// desestruturando array

const array = ["João", "Maria", "Pedro"];

const [primeiro, segundo, terceiro] = Object.values (array);

console.log(primeiro, segundo);

const [quarto, quinto, sexto] = array;
console.log(quarto, quinto);


