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
 * @param {Object} taskDesc Task description.
 */

const addTask = taskDesc => {
  if (taskDesc) {
    let newTaskHTML = `
      <div class="task">
        <p class="task-desc">
        ${taskDesc}
        </p>
        <button class="task-button ${btnFinishTaskClass} fas ${btnFinishTaskClassFA}"></button>
        <button class="task-button ${btnDeleteTaskClass} fas ${btnDeleteTaskClassFA}"></button>
      </div>`;
    todoList.innerHTML += newTaskHTML;
    //TODO: throw exception if taskDesc has not been passed
  } else {
    alert('Please add a description before creating a task.');
  }
};

/**
 * @description Deletes a task from its task list.
 * @param {Object} task Node of the task to be deleteed.
 */
const deleteTask = task => {
  task.remove();
};

/**
 * @description Moves a task from TODO list to 'done' list.
 * @param {Object} task   Node of the task to be marked as done.
 * @param {Object} button Node of the button that has been clicked.
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
 * @description Moves a task from 'done' list to TODO list.
 * @param {Object} task   Node of the task to be undone.
 * @param {Object} button Node of the button that has been clicked.
 */
const undoTask = (task, button) => {
  //Changing button icons
  button.classList.add(btnFinishTaskClassFA);
  button.classList.remove(btnUndoTaskClassFA);

  //Changing button task classes
  button.classList.add(btnFinishTaskClass);
  button.classList.remove(btnUndoTaskClass);

  task.classList.remove(finishedTaskClass);
  todoList.append(task);
};

/*
 *
 * Event handlers
 *
 */

/**
 * @description Handles the submit event on new task form.
 * @param {Object} event Contains information about the event
 * whose listener called this handler.
 */
const newTaskFormSubmitHandler = event => {
  //preventing page refresh
  event.preventDefault();
  addTask(newTaskDesc.value);
  event.target.reset();
};

/**
 * @description Handles the click event on the lists.
 * @param {Object} event Contains information about the event
 * whose listener called this handler.
 */

const listClickHandler = event => {
  let task = event.target.parentNode;
  let button = event.target;

  //Button 'finish task'
  if (button.classList.contains(btnFinishTaskClass)) finishTask(task, button);
  //Button 'delete task'
  else if (button.classList.contains(btnDeleteTaskClass)) deleteTask(task);
  //Button 'undo task'
  else if (button.classList.contains(btnUndoTaskClass)) undoTask(task, button);
};

/*
 *
 * Event listeners
 *
 */

newTaskForm.addEventListener('submit', newTaskFormSubmitHandler);

/*
Using event delegation for both TODO and 'done' lists by adding
event listener on their common parent
*/
taskList.addEventListener('click', listClickHandler);
