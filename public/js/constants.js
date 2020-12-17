/**
 * @module constants
 */

//New task form
const newTaskForm = document.querySelector('.new-task-form');
const newTaskDesc = document.getElementById('new-task-desc');
const submitTask = document.querySelector('.new-task-submit');

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

export {
  newTaskForm,
  newTaskDesc,
  submitTask,
  taskList,
  todoList,
  doneList,
  btnFinishTaskClass,
  btnUndoTaskClass,
  btnDeleteTaskClass,
  finishedTaskClass,
  btnFinishTaskClassFA,
  btnUndoTaskClassFA,
  btnDeleteTaskClassFA
};
