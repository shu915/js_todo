const newButton = document.getElementById('new-button');



newButton.addEventListener('click', () => {
  const newInput = document.getElementById('new-input');
  const todoContent = newInput.value;
  
  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';
  
  const todoText = document.createElement('p');
  todoText.innerText = todoContent;

  const todoCheck = document.createElement('input')
  todoCheck.setAttribute('type', 'checkbox');
  todoCheck.className = 'todo-check';
  todoCheck.addEventListener('click', function() {
    todoText.classList.toggle('completed');
    updateCounters();
  });


  const todoEdit = document.createElement('button');
  todoEdit.innerText = '編集';

  const todoEditInput = document.createElement('input');
  const todoUpdate = document.createElement('button');
  todoUpdate.innerText = '保存';
  todoUpdate.addEventListener('click', function () {
    todoText.innerText = todoEditInput.value;
    todoItem.replaceChild(todoText, todoEditInput);
    todoItem.replaceChild(todoEdit, todoUpdate);
 
  });

  todoEdit.addEventListener('click', function () {
    todoEditInput.value = todoText.innerText;
    todoItem.replaceChild(todoEditInput, todoText);
    todoItem.replaceChild(todoUpdate, todoEdit);
  });

  const todoDelete = document.createElement('button');
  todoDelete.innerHTML = '削除';
  todoDelete.addEventListener('click', function () {
    if (confirm('このTodoを削除していいですか？')) {
      todoItem.remove();
      updateCounters();
    }
  });
  
  todoItem.appendChild(todoCheck);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoEdit);
  todoItem.appendChild(todoDelete);

  const todoList = document.getElementById('todo-list');
  todoList.appendChild(todoItem);

  updateCounters();
});


const allCounter = document.getElementById('all');
const completeCounter = document.getElementById('complete');
const incompleteCounter = document.getElementById('incomplete');

function updateCounters(){
  todoLength = document.querySelectorAll('.todo-item').length;
  completedTodo = document.querySelectorAll('.todo-check:checked');
  completedTodoLength = completedTodo.length;

  allCounter.innerText = todoLength;
  completeCounter.innerText = completedTodoLength;
  incompleteCounter.innerText = todoLength - completedTodoLength;
}