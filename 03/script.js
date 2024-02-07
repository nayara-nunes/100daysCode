const form = document.querySelector('#form');
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password');
const spans = document.querySelectorAll('.span-required')



form.addEventListener('submit',(event) =>{
  event.preventDefault();
  if (passwordInput.value === "" || !validatePassword(passwordInput.value, 8)) {
    setError(passwordInput);
  }else{
    removeError(passwordInput);
  }
  emailInput.value === "" || !isEmailValid(emailInput.value) ? setError(emailInput) : removeError(emailInput);
});
//função que valida e-mail
function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
// função que valida a senha 
function validatePassword(password, minNumbers) {
  return password.length >= minNumbers;
}

function setError(index){
  index.style.border = '2px solid #e63636';
  index === emailInput ? spans[0].style.display = 'block':spans[1].style.display = 'block'
}
function removeError(index){
  index.style.border ='none';
  index === emailInput ? spans[0].style.display = 'none' : spans[1].style.display = 'none';
}



/******************MODO LIGHT e MODO DARK *************************/
const clickButton = document.getElementById('checkbox');
const rootElement = document.documentElement;


const lightTheme ={
'--background':'#c09ca4',
'--background-card':'#AC7D88',
'--white':'#f1e8e8',
'--green':'#436850',
'--greenlight': '#436850',
'--purple':'#B9929B',
'--gray':'#f0ffff94',
'--btn':'#2b134b',
'--span':'#750e0e'

};
const darkTheme ={
  '--background':'#201b2c',
  '--background-card':'#2f2841',
  '--white':'#f1e8e8',
  '--green':'#77ffc0',
  '--greenlight': '#00ff88',
  '--purple':'#514869',
  '--gray':'#f0ffff94',
  '--btn':'#2b134b',
  '--span':'#e63636'
};

let isDarkMode = false;

clickButton.addEventListener('change', function(){
  isDarkMode =! isDarkMode;
  isDarkMode ? changeTheme(darkTheme): changeTheme(lightTheme);
})

function changeTheme(theme) {
  for (let prop in theme) {
    rootElement.style.setProperty(prop, theme[prop]);
  }
}