const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const button = document.querySelector('#button');
const result = document.querySelector('#result');

button.addEventListener('click', function(event) {
    event.preventDefault();
    let bmi = calculateBmi(weight.value, height.value);
    bmiClassification(bmi);
});

function calculateBmi(weight, height) {
    return (((weight) / ((height) ** 2)) * 10000).toFixed(2);
}

function bmiClassification(bmi) {
    if (bmi < 18.5) {
        result.textContent = 'Seu IMC é : ' + bmi + '. De acordo com a Organização Mundial da Saúde, seu IMC está abaixo do recomendado para a sua altura.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.textContent = 'Seu IMC é : ' + bmi + '. De acordo com a Organização Mundial da Saúde, seu IMC é considerado normal para a sua altura.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.textContent = 'Seu IMC é : ' + bmi + '. De acordo com a Organização Mundial da Saúde, seu IMC é considerado acima do recomendado para a sua altura.';
    } else if (bmi >= 30 && bmi <= 34.9) {
        result.textContent = 'Seu IMC é : ' + bmi + '. De acordo com a Organização Mundial da Saúde, seu IMC é considerado acima do recomendado para a sua altura.';
    } else if (bmi >= 35 && bmi <= 39.9) {
        result.textContent = 'Seu IMC é : ' + bmi + '. De acordo com a Organização Mundial da Saúde, seu IMC é considerado acima do recomendado para a sua altura.';
    } else if (bmi >= 40) {
        result.textContent = 'Seu IMC é : ' + bmi + '. De acordo com a Organização Mundial da Saúde, seu IMC é considerado acima do recomendado para a sua altura.';
    } else {
        result.textContent = "Digite valores válidos";
    }
}

