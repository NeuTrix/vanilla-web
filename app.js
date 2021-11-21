'use strict';

document.querySelector('form').addEventListener('submit',handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const input = document.querySelector('input');
  const { value } = input;
  const { submitter } = e;

  const todoList = document.querySelector('ul');

  if (value != '' && submitter.id === "addBtn") {
    addTodo(value);
  }

  if (submitter.id === 'clearBtn') {
    console.log('Cleared all elements');
    todoList.innerHTML = '';
  }

  focusInput();
  input.value = "";
}


function addTodo(value) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <li class="todo" name="todo" value=${value}>
    <div> ${value} </div>
    <div>
      <button class="deleteButton" type="button" name="delete"> Delete </button>
    </div>
    </li>
  `;
  li.addEventListener('click',deleteTodo);

  ul.appendChild(li);
}

function deleteTodo(e) {
  const { name } = e.target
  const todo = e.target.parentNode.parentNode.parentNode;

  if (name === 'delete') {
    todo.remove();
    console.log(`Removed todo`)
  }

}

function focusInput() {
  document.querySelector('input').focus();
}