/*
 *
 * Constants
 *
 */

//Task list
const DoneListSelector = '.section-tasks__finished-wrapper';
const TODOListSelector = '.section-tasks__todo-wrapper';
const TODOList = document.querySelector(TODOListSelector);
const DoneList = document.querySelector(DoneListSelector);

//Tasks
const finishTaskClass = 'finish-task';
const deleteTaskClass = 'delete-task';
const undoTaskClass = 'undo-task';

//Font awesome
const finishTaskClassFA = 'fa-check';
const undoTaskClassFA = 'fa-undo';
const deleteTaskClassFA = 'fa-trash-alt';

//New task form

const addTaskForm = document.querySelector('.section-input__input-wrapper');
const newTaskInput = document.getElementById('user_input');

/*
 *
 * Functions
 *
 */

/**
 * @description Adds a task to the task list.
 */

function addTask() {
  if (newTaskInput.value) {
    let newTaskHTML = `
      <div class="section-tasks__task">
        <p class="section-tasks__task-desc">
        ${newTaskInput.value}
        </p>
        <button class="section-tasks__task-button ${finishTaskClass}"><i class="fas ${finishTaskClassFA}"></i></button>
        <button class="section-tasks__task-button ${deleteTaskClass}"><i class="fas ${deleteTaskClassFA}"></i></button>
      </div>`;
    TODOList.innerHTML += newTaskHTML;
  } else {
    alert('Please add some task');
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

  /*Button delete*/

  //user has clicked on button but not on icon
  if (event.target.classList.contains(deleteTaskClass)) {
    task = event.target.parentNode;
    deleteTask(task);

    //user has clicked on icon
  } else if (event.target.parentNode.classList.contains(deleteTaskClass)) {
    task = event.target.parentNode.parentNode;
    deleteTask(task);
  }

  /*Button mark as done*/

  //user has clicked on button but not on icon
  if (event.target.classList.contains(finishTaskClass)) {
    task = event.target.parentNode;
    button = event.target;
    finishTask(task, button);
    //user has clicked on icon
  } else if (event.target.parentNode.classList.contains(finishTaskClass)) {
    task = event.target.parentNode.parentNode;
    button = event.target.parentNode;
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

  //user has clicked on button but not on icon
  if (event.target.classList.contains(undoTaskClass)) {
    task = event.target.parentNode;
    button = event.target;
    undoTask(task, button);
    //user has clicked on icon
  } else if (event.target.parentNode.classList.contains(undoTaskClass)) {
    task = event.target.parentNode.parentNode;
    button = event.target.parentNode;
    undoTask(task, button);
  }

  /*Button delete*/

  //user has clicked on button but not on icon
  if (event.target.classList.contains(deleteTaskClass)) {
    task = event.target.parentNode;
    deleteTask(task);

    //user has clicked on icon
  } else if (event.target.parentNode.classList.contains(deleteTaskClass)) {
    task = event.target.parentNode.parentNode;
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
  button.querySelector('i').classList.add(undoTaskClassFA);
  button.querySelector('i').classList.remove(finishTaskClassFA);

  //Changing button classes
  button.classList.add(undoTaskClass);
  button.classList.remove(finishTaskClass);

  task.classList.add('finished');
  DoneList.append(task);
};

/**
 * @description Move a task from 'done' list to TODO list.
 */
const undoTask = (task, button) => {
  //Changing button icons
  button.querySelector('i').classList.add(finishTaskClassFA);
  button.querySelector('i').classList.remove(undoTaskClassFA);

  //Changing button classes
  button.classList.add(finishTaskClass);
  button.classList.remove(undoTaskClass);

  task.classList.remove('finished');
  TODOList.append(task);
};

/*
 *
 * Events
 *
 */

//Using event delegation for TODO list
TODOList.addEventListener('click', TODOListClickHandler);
TODOList.addEventListener('click', TODOListClickHandler);

//Using event delegation for 'done' list
DoneList.addEventListener('click', doneListClickHandler);
DoneList.addEventListener('click', doneListClickHandler);

addTaskForm.addEventListener('submit', event => {
  //preventing page refresh
  event.preventDefault();
  addTask();
  addTaskForm.reset();
});
