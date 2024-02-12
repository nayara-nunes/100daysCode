/*### **Exemplos de exercícios:**

1. Crie um objeto para representar um carro com as propriedades `marca`, `modelo`, `ano` e `cor`.
2. Crie um objeto para representar um cliente com as propriedades `nome`, `cpf`, `endereco` e `telefone`.
3. Crie um objeto para representar um produto com as propriedades `nome`, `preco`, `descricao` e `estoque`.
4. Crie um objeto para representar um livro com as propriedades `titulo`, `autor`, `editora` e `ano de publicação`.
5. Crie um objeto para representar um filme com as propriedades `titulo`, `diretor`, `elenco` e `ano de lançamento`.
6. Adicione um método ao objeto `pessoa` que retorne o nome completo da pessoa.
7. Adicione um método ao objeto `cliente` que calcule o IMC da pessoa.
8. Adicione um método ao objeto `produto` que verifica se o produto está em estoque.
9. Adicione um método ao objeto `livro` que retorne o nome da editora.
10. Adicione um método ao objeto `filme` que retorne a lista de atores. */


//1. Crie um objeto para representar um carro com as propriedades `marca`, `modelo`, `ano` e `cor`.

const carro = {
  marca : 'Nissan',
  modelo : 'Tiida',
  ano : 2012,
  cor: 'Preto'
}

//2. Crie um objeto para representar um cliente com as propriedades `nome`, `cpf`, `endereco` e `telefone`.

const cliente = {
  nome: 'Nayara',
  sobrenome: 'Nunes',
  cpf: 10965040465,
  endereco: {
    rua :"Rua da floração",
    numero: 450,
    cidade : 'Morada Nova',
    cep: 35500123
  },
  telefone : 389980-56243,
  peso: 65,
  altura:1.65,
}

//3. Crie um objeto para representar um produto com as propriedades `nome`, `preco`, `descricao` e `estoque`.

const produto = {
  nome : 'Borracha',
  descricao: 'Apaga e tals',
  preco: 5.20,
  estoque : 0,
}

//4. Crie um objeto para representar um livro com as propriedades `titulo`, `autor`, `editora` e `ano de publicação`.
const livro ={
  titulo : 'O Nome da Rosa',
  autor: 'Umberto Eco',
  editora: 'Novatec',
  ano_publicação : 2005,

}

//5. Crie um objeto para representar um filme com as propriedades `titulo`, `diretor`, `elenco` e `ano de lançamento`.
const filme = {
  titulo : 'Laranja Mecânica',
  diretor : 'Stanley Kubrick',
  elenco: ['Malcom McDowell', 'Patrick Magee', 'Adrienne Corri', 'Miriam Karlim'],
  ano_lançamento: 1971,
}


//6. Adicione um método ao objeto `pessoa` que retorne o nome completo da pessoa.
const nome_completo ={
  nome: 'Nayara',
  sobrenome: 'Nunes',
  nome_completo: function(){
    return this.nome + " " + this.sobrenome;

  }
};

console.log(nome_completo.nome_completo());





//7. Adicione um método ao objeto `cliente` que calcule o IMC da pessoa.
cliente.calculaIMC = function(){
  let imc = this.peso/ (this.altura * this.altura);
  return imc.toFixed(2)

}

// chamando o método
console.log("O IMC de "+ cliente.nome + " " + cliente.sobrenome + " é: " + cliente.calculaIMC());



//8. Adicione um método ao objeto `produto` que verifica se o produto está em estoque.
 

produto.emEstoque = function(){

  produto.estoque ?  console.log('está em estoque'):  console.log('Não tem estoque')
}

console.log(produto.emEstoque())

//9. Adicione um método ao objeto `livro` que retorne o nome da editora.

console.log(livro.editora)
//10. Adicione um método ao objeto `filme` que retorne a lista de atores.
filme.mostrarElenco = function(){
  for(const atores in filme.elenco){
    console.log( filme.elenco[atores] )
  }
}
console.log(filme.mostrarElenco());
//11. Adicione um método ao objeto `carro` que retorne a idade do carro.
carro.idadeCarro = function(){
  console.log(carro.ano)
}
console.log(carro.idadeCarro());

//12. Crie um objeto `círculo` com propriedades como `raio`, e métodos para calcular a área e o perímetro.

const circulo ={
  raio: 0,

  definirRaio: function(novoRaio) {
    this.raio = novoRaio;
  },

  calcularArea : function(){
    return Math.PI * this.raio ** 2;
  },
  calcularPerimetro : function(){
    return 2 * Math.PI * this.raio ;
  }

}
console.log(circulo.definirRaio(5));
console.log("Área do círculo: " + circulo.calcularArea());
console.log("Perímetro do círculo: " + circulo.calcularPerimetro());

//13. Escreva uma função que receba um objeto como parâmetro e liste todas as suas propriedades e valores.

const propFilme =(filme)=>{
  for(const prop in filme){
    console.log(prop + " : " + filme[prop])
  }

}

console.log(propFilme(filme))


/*14. Crie um objeto `contaBancaria` com propriedades como `titular`, `saldo` e métodos para 
`depositar` e `retirar` dinheiro.*/

const contaBancaria ={
  titular: 'Nome do Cliente',
  saldo: 4352.00,
  depositar: function(){

  },
  saque: function(){

  }
}

//15.Escreva uma função que verifique se um objeto está vazio (ou seja, não possui propriedades).

  const verifiqueVazio =()=>{
    for( let propriedade in objeto){
      if(objeto.hasOwnProperty(propriedade)){
        return false;
      }
    }
     return true;

  }

  let objetoVazio = {};
  let pessoa = {nome: "Maria", idade:25};


/*17.Escreva uma função que receba dois objetos como parâmetros e verifique se eles
 têm as mesmas propriedades e valores.*/



/*18.Crie um objeto `retângulo` com propriedades como `largura`, `altura` 
e métodos para calcular a área e o perímetro.*/



//19.  Escreva uma função que receba um objeto e retorne a quantidade de propriedades que ele possui.
