/*
 *
 * Constants
 *
 */

//Task list
const doneListSelector = '.task-list-finished-wrapper';
const TODOListSelector = '.task-list-todo-wrapper';
const TODOList = document.querySelector(TODOListSelector);
const doneList = document.querySelector(doneListSelector);

//Task buttons CSS classes
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
 * Functions
 *
 */

/**
 * @description Adds a task to the task list.
 */

function addTask(desc) {
  if (desc) {
    let newTaskHTML = `
      <div class="task">
        <p class="task-desc">
        ${newTaskDesc.value}
        </p>
        <button class="task-button ${btnFinishTaskClass} fas ${btnFinishTaskClassFA}"></button>
        <button class="task-button ${btnDeleteTaskClass} fas ${btnDeleteTaskClassFA}"></button>
      </div>`;
    TODOList.innerHTML += newTaskHTML;
    //TODO: throw exception if desc has not been passed
  } else {
    alert('Please add a description before creating a task.');
  }
}

/**
 * @description Handles the click event on the TODO List
 * @param {Object} event contains information about the event
 * whose listener called this handler
 */

const TODOListClickHandler = event => {
  let task;
  let button;

  /*Button delete task*/
  if (event.target.classList.contains(btnDeleteTaskClass)) {
    task = event.target.parentNode;
    deleteTask(task);
  }

  /*Button mark task as done*/
  if (event.target.classList.contains(btnFinishTaskClass)) {
    task = event.target.parentNode;
    button = event.target;
    finishTask(task, button);
  }
};

/**
 * @description Handles the click event on the done List
 * @param {Object} event contains information about the event
 * whose listener called this handler
 */

const doneListClickHandler = event => {
  let task;
  let button;

  /*Button undo task*/
  if (event.target.classList.contains(btnUndoTaskClass)) {
    task = event.target.parentNode;
    button = event.target;
    undoTask(task, button);
  }

  /*Button delete task*/
  if (event.target.classList.contains(btnDeleteTaskClass)) {
    task = event.target.parentNode;
    deleteTask(task);
  }
};

/**
 * @description Deletes a task from its task list.
 */
const deleteTask = task => {
  task.remove();
};

/**
 * @description Moves a task from TODO list to done list.
 */
const finishTask = (task, button) => {
  //Changing button icons
  button.classList.add(btnUndoTaskClassFA);
  button.classList.remove(btnFinishTaskClassFA);

  //Changing button task classes
  button.classList.add(btnUndoTaskClass);
  button.classList.remove(btnFinishTaskClass);

  task.classList.add(finishedTaskClass);
  doneList.append(task);
};

/**
 * @description Move a task from 'done' list to TODO list.
 */
const undoTask = (task, button) => {
  //Changing button icons
  button.classList.add(btnFinishTaskClassFA);
  button.classList.remove(btnUndoTaskClassFA);

  //Changing button task classes
  button.classList.add(btnFinishTaskClass);
  button.classList.remove(btnUndoTaskClass);

  task.classList.remove(finishedTaskClass);
  TODOList.append(task);
};

/*
 *
 * Events
 *
 */

newTaskForm.addEventListener('submit', event => {
  //preventing page refresh
  event.preventDefault();
  addTask(newTaskDesc.value);
  newTaskForm.reset();
});

//Using event delegation for TODO list
TODOList.addEventListener('click', TODOListClickHandler);
TODOList.addEventListener('click', TODOListClickHandler);

//Using event delegation for 'done' list
doneList.addEventListener('click', doneListClickHandler);
doneList.addEventListener('click', doneListClickHandler);
