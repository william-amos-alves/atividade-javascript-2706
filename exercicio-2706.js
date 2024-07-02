// 1. Crie uma função que recebe um array com os nomes dos alunos de uma turma,
// e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.

function alunosFaltantes(alunos, presenca) {
    return alunos.filter(aluno => !presenca.includes(aluno));
}
  
const alunos = ['Ana', 'Bruno', 'Carla', 'Daniel'];
const presenca = ['Ana', 'Daniel'];
  
const faltantes = alunosFaltantes(alunos, presenca);

console.log(faltantes);
  

// 2. Crie uma função que recebe um array de números e retorna um array com todos 
// os valores elevados ao quadrado.

function quadrados(numeros) {
    return numeros.map(numero => numero * numero); // Eu ultilizei o MAP porque ela vai  trazer o resultados da chamada de uma função para cada elemento do array original
}
  
const numero = [1, 2, 3, 4, 5];
const quadradosArray = quadrados(numero);

console.log(quadradosArray); 
  


// 3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, 
// a função deve retornar apenas os nomes de arquivo que forem dessa extensão.

function filtrarPorExtensao(arquivos, extensao) {
    if (!extensao.startsWith(".")) {
      extensao = "." + extensao;
    }
      
    return arquivos.filter(arquivo => arquivo.endsWith(extensao));
}

const arquivos = ['documento.txt', 'imagem.jpg', 'apresentacao.ppt', 'tabela.xlsx', 'codigo.js'];
const extensao = 'jpg';
  
const arquivosFiltrados = filtrarPorExtensao(arquivos, extensao);

console.log(arquivosFiltrados);
  
// 4. Crie um array contendo os números de 1 a 10 e exiba-os no console com for-of e for comum.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Usando for...of:');
for (const numero of numeros) {
  console.log(numero);
}

console.log('Usando for comum:');
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// 5. Crie uma função que recebe um array de strings como parâmetro e retorne 
// um novo array apenas com as strings acima de 5 caracteres.

function filtrarStringsLongas(strings) {

    return strings.filter(str => str.length > 5);
}
  
const palavras = ['curto', 'adequado', 'longo', 'muito longo', 'ok'];
const palavrasLongas = filtrarStringsLongas(palavras);

console.log(palavrasLongas);
  
// 6. Crie um array com 7 números. Percorra e indique qual o maior número deles.
// Criando o array com 7 números
const media = [3, 1, 4, 1, 5, 9, 2];

    let maiorMedia = media [0];
    for (let i = 1; i < media.length; i++) {
    if (media[i] > maiorMedia) {
        maiorMedia = media[i];

    }
}

console.log('O maior número é:', maiorMedia);

// 7. Crie uma função que extrai os dígitos verificadores de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois últimos dígitos.

function extrairDigitosVerificadores(cpf) {
   
const cpfLimpo = cpf.replace(/[.]/g, '');
const digitosVerificadores = cpfLimpo.slice(-2);
    
    return digitosVerificadores;
}
  
const cpf = "056.985.990-23";
const digitos = extrairDigitosVerificadores(cpf);

console.log(digitos); 
  

// 8. Crie uma função que inverte uma string. Retorna ela invertida.

function inverterString(str) {
  
const arrayDeCaracteres = str.split('');
const arrayInvertido = arrayDeCaracteres.reverse();
const stringInvertida = arrayInvertido.join('');
    
    return stringInvertida;
}

const exemplo = "William";
const resultado = inverterString(exemplo);

console.log(resultado); 

// 9. Escreva uma função que receba uma palavra e um número. Retorne a palavra repetida a quantidade de vezes
// indicada pelo segundo parâmetro. Exemplo: repetir("batata", 3) -> "batatabatatabatata".
//  OBS: Utilize um loop para resolver.

function repetirPalavra(palavra, quantidade) {
    let resultado = '';  
    for (let i = 0; i < quantidade; i++) {
      resultado += palavra;
    }

    return resultado;
}
  
const palavra = "bola";
const quantidade = 3;
const respostsa = repetirPalavra(palavra, quantidade);

console.log(respostsa); 
  

// 10. Escreva uma função que receba duas strings e retorne true se elas 
// forem iguais ou false caso contrário.

function compararStrings(str1, str2) {
    return str1 === str2;
}
  
console.log(compararStrings("ola", "ola")); // true
console.log(compararStrings("ola", "mundo")); // false
console.log(compararStrings("aberto", "AberTO")); // false
  

// 11. Crie uma função que recebe um dia, mês e ano dentro de um array. Retorna a data utilizando o separador
// que também será definido via parâmetros da função (-, / ou .).
// Ex: formatarData(array, '.') -> '20.06.2000'

function formatarData(data, separador) {

const dia = data[0];
const mes = data[1];
const ano = data[2];
    
    return `${dia}${separador}${mes}${separador}${ano}`;
}
  

console.log(formatarData([20, 6, 2000], '.')); 
console.log(formatarData([15, 12, 1995], '/')); 
console.log(formatarData([3, 9, 2023], '-'));
  


// 12. Crie uma função que recebe um array, um valor de busca e um valor padrão. 
// Caso o elemento exista no array retorne o elemento, caso contrário retorne o valor padrão 
// definido via parâmetro. Ex: busca(array, 'batata', 'não tem batata') -> 'não tem batata'

function busca(array, valorBusca, valorPadrao) {
    if (array.includes(valorBusca)) {
      return valorBusca;
    } else {
      return valorPadrao;
    }
}
  
const frutas = ['maçã', 'banana', 'laranja'];
console.log(busca(frutas, 'banana', 'não tem banana')); 
console.log(busca(frutas, 'uva', 'não tem uva')); 
console.log(busca(frutas, 'laranja', 'não tem laranja')); 
console.log(busca(frutas, 'abacaxi', 'não tem abacaxi')); 
  