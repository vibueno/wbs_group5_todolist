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
    this._id = id;
    this._description = description;
    this._finished = false;
  }

  markAsDone() {
    this.finished = true;
  }

  undoTask() {
    this.finished = false;
  }
}
























































//MEMO class taskList



class Tasklist{
  constructor(tasks,idCounter){
    this.tasks=[tasks];
    this.idCounter=0;
  }
  addTask(Task){
this.tasks.push(Task);
this.idCounter++;
  }



  removeTask(id){
this.tasks.remove(id);
this.idCounter--;
  }
}

















//prevent default reset on submit

submitTask.addEventListener('click', event => {
  event.preventDefault();
});
