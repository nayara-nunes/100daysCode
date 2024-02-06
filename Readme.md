# Desafio 100 Days of Code - Jornada Front-end 🚀

Bem-vindo ao meu repositório para o Desafio "100 Days of Code"! Este projeto é a minha jornada empolgante rumo à um conhecimento sólido  no desenvolvimento front-end, começando desde as bases e progredindo para níveis avançados.

## Objetivo do Desafio

O objetivo principal é solidificar meus conhecimentos em front-end ao longo de 100 dias consecutivos de codificação. Durante este desafio, pretendo explorar as tecnologias mais relevantes no cenário atual e aplicá-las em projetos práticos.

## O que Esperar

1. **Projetos Diários**: Cada dia será dedicado a um projeto prático, abrangendo conceitos fundamentais do front-end.
2. **Aprendizado Contínuo**: Vou compartilhar meus insights, desafios e aprendizados diários no README, proporcionando uma visão transparente do processo de aprendizado.
3. **Código Fonte Aberto**: Todos os projetos estarão disponíveis aqui, com documentação clara e estrutura organizada.

## Tópicos Abordados

- HTML5 e Semântica
- CSS3 e Pré-processadores
- JavaScript ES6+
- Frameworks Front-end (por exemplo, React, Vue)
- Responsividade e Design Adaptativo
- Ferramentas de Build (Webpack, Babel)
- Controle de Versão com Git
- Boas Práticas de Desenvolvimento e Padronização de Código

## Como Acompanhar

Fique à vontade para explorar o código, clonar o repositório e sugerir melhorias. Se quiser seguir minha jornada diária, confira as atualizações neste README e em minhas redes sociais.

Agradeço por fazer parte dessa jornada incrível! Vamos codificar juntos! 💻✨



<hr>

  ### indice
  
  [Dia 01 - Formulário com validação](#dia01)
  [Dia 02 - Light Mode/Dark Mode ](#dia02) 
  [Dia 03 - ](#dia03)








<hr>



  ## Dia 01 - Formulários e validações
  
Hoje, no primeiro dia do Desafio "100 Days of Code", mergulhei no estudo de formulários HTML e implementei uma página Landing Page de Captura com formulário simples com validações básicas. Aqui está um resumo do que foi abordado:
### Aprendizados do dia 

**Formulários HTML**

* Revisão dos elementos fundamentais de um formulário HTML, como  form,input, label, e button.
* Exploração de diferentes tipos de campos de entrada, como text, email e password.
* Validações Básicas
* Implementação de validações simples usando atributos HTML, como required e pattern.
* Garantia de que os campos obrigatórios não são deixados em branco.
* Validando o formato do e-mail usando expressões regulares.

**Código do Projeto** 
Confira o código-fonte do formulário no arquivo index.html. Nele, você encontrará comentários explicativos sobre as implementações realizadas.


```html 
<!-- index.html -->


        <form action="POST">
          <input type="email" name="email" id="" placeholder="E-mail" required >
          <input type="text" name="name" placeholder="Nome" required pattern="[A-Za-z\s]+">
          <input required id="phone" name="phone" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})">
        
          <label for="aulas">Qual a aula mais te interessa? </label>
          <select name="aulas" id="aulas">
            <option value="Selecione">Selecione</option>
            <option value="Planejamento e materiais">Planejamento e Materiais </option>
            <option value="Seleção das melhores plantas">Seleção das Melhores Plantas</option>
            <option value="Preparação do solo">Preparação do Solo</option>
            <option value="Plantio e germinação">Plantio e Germinação</option>
            <option value="Cuidados diários">Cuidados Diários</option>
      </div>

        </select>
        <button type="submit">Enviar</button>


      </form>
```

**Próximos passos**
Este foi apenas o primeiro passo da jornada! Nos próximos dias, pretendo aprofundar meu conhecimento em front-end, explorando novos conceitos e aplicando-os em projetos práticos. Fique ligado para mais atualizações! 💻✨

<hr>

## Dia 02 -

### Aprendizados do dia 

**Revisão propriedades CSS**

* 🎨 Aprofundei-me nas propriedades de CSS, utilizando os tutoriais do w3schools. Consegui abordar uma boa parte das seções básicas e resolvi 60 exercícios, esclarecendo várias dúvidas.
* 📱 Explorei mais o conceito de Design Responsivo, aprimorando minhas habilidades.
* 🔄 Reforcei meus conhecimentos em manipulação de DOM.
* 💡 Como projeto prático, fiz um mini-site para mudar o padrão de cores utilizando manipulação de DOM!
 
 **Projeto**
 Este projeto é um exemplo simples de como alternar entre temas claro e escuro em uma página da web utilizando JavaScript para manipular o DOM (Document Object Model). Ele demonstra como aplicar estilos dinamicamente, atualizar conteúdo e responder a eventos do usuário para criar uma experiência de usuário personalizada. O código inclui a definição de dois temas diferentes, lightTheme e darkTheme, e a funcionalidade de alternar entre eles ao clicar em um botão. 
 
 ```js 
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


```