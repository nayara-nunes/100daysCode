const clickButton = document.getElementById('click');
const rootElement = document.documentElement;
const h1Element = document.querySelector('h1');

const lightTheme = {
  '--background-color': '#Efe9e1',
  '--text-color': '#121212',
  '--button-background-color': '#E6A4B4',
  '--button-text':'Dark',
  '--h1-text': 'Welcome to Light Theme!😵'
};

const darkTheme = {
  '--background-color': '#191919',
  '--text-color': '#Efe9e1',
  '--button-background-color': '#404B69',
  '--button-text':'Light',
  '--h1-text': 'Welcome to Dark Theme!😉'
  
};

let isDarkMode = false;

clickButton.addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  isDarkMode ? changeTheme(darkTheme) : changeTheme(lightTheme);
});

function changeTheme(theme) {
  for (let prop in theme) {
    rootElement.style.setProperty(prop, theme[prop]);
  }
  // Atualiza o texto do botão e do h1 conforme o tema
  clickButton.textContent = theme['--button-text'];
  h1Element.textContent = theme['--h1-text'];
}

