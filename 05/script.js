
// IEFE
(() => { 



const input = document.getElementById('newItem');
const button = document.querySelector('.button-add');
const todoList = document.querySelector('.todo');



button.addEventListener('click', function(event){
  event.preventDefault;
  if(!input.value)return;
  addTask(input.value);
})


input.addEventListener('keypress', function(e){
  if(e.keyCode === 13){
    if(!input.value)return;
    addTask(input.value);

  }
})

//functions

// adiciona item na tela

function addTask(textInput){
  
  const item = createItem();
  item.innerText = textInput;
  item.addEventListener('click', function() {
    const textDecoration = window.getComputedStyle(this).getPropertyValue('text-decoration');
    if (textDecoration.includes('line-through')) {
      this.style.textDecoration = 'none'; // Remove o estilo de tachado se já estiver riscado
    } else {
      this.style.textDecoration = 'line-through wavy #d47230'; // Adiciona o estilo de tachado se não estiver riscado
    }
  });
  
  todoList.appendChild(item);
  clearInput();
  createDeleteButton(item);
  saveTask();

}
// salvar as tarefas
function saveTask(){
  const itemTask = document.querySelectorAll('li');
  const taskList = [];

  for(let task of itemTask){
    let taskText = task.innerText;
    taskText = taskText.replace('Apagar', '').trim();
    taskList.push(taskText);
  
  }

const taskJSON = JSON.stringify(taskList);
localStorage.setItem('task',taskJSON);


}

//converte de volta para um objeto JS
function addSavedTasks(){
  const tasks = localStorage.getItem('task');
  const taskList =JSON.parse(tasks);
  for(task of taskList){
    addTask(task)
  }
}
addSavedTasks();


// cria o item
function createItem(){
  const li = document.createElement('li');
  return li;
}

// limpa o input após adicionar o item

function clearInput(){
  input.value = '';
  input.focus();
}
// Cria botão de deletar

function createDeleteButton(li) {
  li.innerText += ' ';
  const buttonDelete = document.createElement('button');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-trash-alt'); // Classe do ícone de lixeira do Font Awesome
  buttonDelete.appendChild(icon);
  buttonDelete.setAttribute('class', 'delete');
  li.appendChild(buttonDelete);

  buttonDelete.addEventListener('click', function() {
    li.remove();
    saveTask();
  });
}


})();

/* pensando na lógica da funcionalidade, 
quero que quando eu clicar no li eu identifique qual li eu 
cliquei  */