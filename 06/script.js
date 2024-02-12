const valor = document.querySelector('#entrada');
const converte = document.querySelector('.btn');
const mostraValor = document.querySelector('.aviso');
let moedaSelecionada = document.getElementsByName('moedaEstrangeira');

// dolar hoje: 4,95

let valorDolar = 4.95;
let valorEuro = 5.34;
let valorLibra = 6.26;

converte.addEventListener('click', function(event){
  event.preventDefault();

  const valorInput = parseFloat(valor.value);

  //verifico se o campo se é um numero e se o numero é maior que 0 
  if(isNaN(valorInput) || valorInput === 0){
    console.log('O campo está vazio ou o valor é igual a 0');

  }else{
   const valorConvertido = converteValor(valorInput);
   mostraValor.textContent = valorConvertido;
   limpaInput()
  }
});
let moedaEstrangeira = '';

// Converte o valor identificando qual moeda foi selecionada e fazendo os calculos especificos 
function converteValor (valorInput){
  identificaMoeda(moedaSelecionada)
  let moedaConvertida;

  switch(moedaEstrangeira){
    case 'Dólar': 
    moedaConvertida = (valorInput / valorDolar);

    return moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      break;
    case 'Euro':
     moedaConvertida = (valorInput / valorEuro);
     return moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

      break;
    case 'Libra':
      moedaConvertida =  (valorInput / valorLibra);
      return moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })
    
      break;
  }

}
function identificaMoeda(){
  for(let i =0; i<moedaSelecionada.length; i++){
    if(moedaSelecionada[i].checked){
       moedaEstrangeira = moedaSelecionada[i].value
    }
  
  }
}
function limpaInput(){
  valor.value = '';
}