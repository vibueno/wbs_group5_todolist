/*
 *
 * Constants
 *
 */

//Task lists
const taskList = document.querySelector('.task-list');
const todoList = document.querySelector('.task-list-todo-wrapper');
const doneList = document.querySelector('.task-list-finished-wrapper');

//Task buttons CSS classes
const submitTask = document.querySelector('.new-task-submit');

const btnFinishTaskClass = 'finish-task';
const btnUndoTaskClass = 'undo-task';
const btnDeleteTaskClass = 'delete-task';

const finishedTaskClass = 'finished';

//Font awesome CSS classes
const btnFinishTaskClassFA = 'fa-check';
const btnUndoTaskClassFA = 'fa-undo';
const btnDeleteTaskClassFA = 'fa-trash-alt';

//New task form
const newTaskForm = document.querySelector('.new-task-form');
const newTaskDesc = document.getElementById('new-task-desc');

/*
 *
 * Classes
 *
 */

class Task {
  constructor(description, id) {
    this._id = id;
    this._description = description;
    this._finished = false;
  }

  markAsDone() {
    this._finished = true;
  }

  undoTask() {
    this._finished = false;
  }
}

class Tasklist {
  constructor() {
    this._tasks = [];
    this._idCounter = 0;
  }
  addTask(Task) {
    this._tasks.push(Task);
    this._idCounter++;
  }

  removeTask(id) {
    let index = this._tasks.indexOf(id);
    this._tasks.splice(id, index);
  }
}

/*
 *
 * New list
 *
 */

const newToDoList = new Tasklist();

/*
 *
 * Functions
 *
 */

//move the task to Done section of the list
const finishTask = (task, button) => {
  const targetID = task.id;
  const taskArray = newToDoList._tasks;

  //Changing button icons
  button.classList.add(btnUndoTaskClassFA);
  button.classList.remove(btnFinishTaskClassFA);

  //Changing button task classes
  button.classList.add(btnUndoTaskClass);
  button.classList.remove(btnFinishTaskClass);

  task.classList.add(finishedTaskClass);
  doneList.append(task);

  for (let i = 0; i < taskArray.length; i++) {
    console.log(taskArray)
    if(taskArray[i]._id === parseInt(targetID)) {
      taskArray[i].markAsDone();
      console.log(taskArray[i]);
    }
  }
};

//move task back to unfinished section of the list
const undoTask = (task, button) => {
  const targetID = task.id;
  const taskArray = newToDoList._tasks;

  //Changing button icons
  button.classList.add(btnFinishTaskClassFA);
  button.classList.remove(btnUndoTaskClassFA);

  //Changing button task classes
  button.classList.add(btnFinishTaskClass);
  button.classList.remove(btnUndoTaskClass);

  task.classList.remove(finishedTaskClass);
  todoList.append(task);

  for (let i = 0; i < taskArray.length; i++) {
    if(taskArray[i]._id === parseInt(targetID)) {
      taskArray[i].undoTask();
      console.log(taskArray[i]);
    }
  }

};

const deleteTask = task => {
  task.remove();
  newToDoList.removeTask(task);
  console.log(newToDoList);
};

/*
 *
 * Event listeners
 *
 */

newTaskForm.addEventListener('submit', event => {
  const id = newToDoList._idCounter;
  const inputValue = newTaskDesc.value;
  const newTask = new Task(inputValue, id);
  const taskHTML = `<div class="task" id="${id}">
                      <p class="task-desc">${inputValue}</p>
                      <button class="task-button finish-task fas fa-check"></button>
                      <button class="task-button delete-task fas fa-trash-alt"></button>
                    </div>`;
  newToDoList.addTask(newTask);
  todoList.innerHTML += taskHTML;
  event.target.reset();
  //prevent default reset on submit
  event.preventDefault();
});

taskList.addEventListener('click', event => {
  let task = event.target.parentNode;
  let button = event.target;

  //Button 'finish task'
  if (button.classList.contains(btnFinishTaskClass)) finishTask(task, button);
  //Button 'delete task'
  else if (button.classList.contains(btnDeleteTaskClass)) deleteTask(task);
  //Button 'undo task'
  else if (button.classList.contains(btnUndoTaskClass)) undoTask(task, button);
});
