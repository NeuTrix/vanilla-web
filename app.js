'use strict';

document.querySelector('form').addEventListener('submit',handleClick);

function handleClick(e) {
  e.preventDefault();

  const input = document.querySelector('input');
  const { name,value } = input;
  const { submitter } = e;

  const todoList = document.querySelector('ul');

  console.log({ name,value,submitter },submitter.className,submitter.id);

  if (value != '' && submitter.id === "addBtn") {
    addTodo(value);
  }

  if (submitter.id === 'clearBtn') {
    console.log('Cleared all elements');
    todoList.innerHTML = '';
  }
  // case 'delBtn':
  //   console.log({ name,value,submitter },submitter);

  //   alert('trying')
  //   deleteTodo()
  //   break;
  // case 'clearBtn':
  focusInput();
  input.value = "";
}


function addTodo(value) {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <li class="todo">
    <div> ${value} </div>
    <div>
      <button class="delBtn" type="submit"> Delete </button>
    </div>
    </li>
  `;
  ul.appendChild(li);

  console.log(`===> ADDED newItem ${value}`);
}

function deleteTodo() {
  const value = 'something';
  alert(`DELETED Item ${value}`)
}

function focusInput() {
  document.querySelector('input').focus();
}