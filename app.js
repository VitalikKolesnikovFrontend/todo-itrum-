const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');

form.addEventListener('click', (event) => {
  event.preventDefault();
  
  const taskText = taskInput.value
  
  const taskHTML = `          <li class="task-list-item">
  <span class="task-title">${taskText}</span>
  <div class="task-item__buttons">
    <button class="task-list-button">OK</button>
    <button class="task-list-buttondelete">delete</button>
  </div>
</li>`

  
})