// 1. Crie uma função arrow que recebe dois números e retorna o maior deles.

const checarNumeroMaior = (n1, n2) =>{
    if( n1 < n2 ){
        console.log(`O número ${n1} é maior`);
        return true;
    }else{
        console.log(`O número ${n2} é maior.`);
        return false;
    }
}
 let maiorNumero = checarNumeroMaior(8,10);
 console.log(maiorNumero);


// 2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

const Maiuscula = (str) =>{

    return str.charAt(0).toUpperCase() + str.slice(1);
}
    let palavras = ["batata", "ovo", "manga","uva"];

    palavras.forEach((palavra, index, arr) => {
        arr[index] = Maiuscula (palavra);
    })

console.log(palavras);

// 3. Use map para transformar um array de números, multiplicando cada número por 5.

const valores = [1, 2, 3, 4, 5, 6, 7];
const novoValores = valores.map((valor) => {
   
        return valor * 5;  
});

console.log(novoValores);



// 4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.

const idades = [14, 15, 18, 29, 24];
const idadesAcima7 = idades.filter((idades) => idades > 17);

console.log(idadesAcima7);

// 5. Dado um objeto representando um livro, que contém título, autor,
// e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

let livro = {
    titulo: "O menino maluquinho",
    autor: "Ziraldo Alves",
    publicacao: {
        editora: "Melhoramentos",
        ano: 2023
    }
};

const nomeEditora = livro.publicacao.editora;
console.log(nomeEditora);

// 6. Crie um array de frutas e use a desestruturação para extrair a primeira e a 
// segunda fruta em variáveis separadas.

const frutas = ["banana","uva"," manga","goiaba","caju"];
    const [primeiraFruta, segundaFruta] = frutas;

    console.log(primeiraFruta);
    console.log(segundaFruta);

// 7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, 
// forEach, map e filter.

const inverterPalavra = (palavra) => {
    let invertida = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }
    return invertida;
};

const palavra = "futebol";
const invertida = inverterPalavra(palavra);
console.log(invertida);
