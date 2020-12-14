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

/*
 *
 * Classes
 *
 */

class Task {
  constructor(description) {
    this.description = description;
    this.notFinished = true;
    this.btnClass = btnFinishTaskClass;
    this.btnIcon = btnFinishTaskClassFA;
  }

  markAsDone() {
    this.taskNotFinished = false;
    this.btnClass = btnUndoTaskClass;
    this.btnIcon = btnUndoTaskClassFA;
  }

  undoTask() {
    this.taskNotFinished = true;
    this.btnClass = btnFinishTaskClass;
    this.btnIcon = btnFinishTaskClassFA;
  }
}

//prevent default reset on submit

submitTask.addEventListener('click', event => {
  event.preventDefault();
});
