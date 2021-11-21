'use strict';

document.querySelector('form').addEventListener('submit',handleClick);

function handleClick(e) {
  e.preventDefault();

  const input = document.querySelector('input');
  const { name,value } = input;
  const { submitter } = e;

  const todoList = document.querySelector('ul');

  if (value != '') {

    switch (submitter.id) {
      case 'addBtn':
        addTodo(value);
        input.value = "";
        focusInput();
        console.log({ name,value,submitter },submitter);
        break;
      case 'delBtn':
        break;
      case 'clearBtn':
        break;
      default:
        input.value = "";
        focusInput();
    }


  }
}

function addTodo(value) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <li class="item">
    <div>
    ${value}
    </div>
    <button class="delBtn" type="submit"> Delete </button>
    </li>
    `;


  ul.appendChild(li);
  console.log(`===> ADDED newItem ${value}`);
}

function focusInput() {
  document.querySelector('input').focus();
  console.log('Re-focused')
}