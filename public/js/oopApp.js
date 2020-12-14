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
const submitTask = document.querySelector(".new-task-submit");

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
    constructor(taskDesc) {
        this.taskDesc = taskDesc;
        this.taskNotFinished = true;
        this.taskClass = btnFinishTaskClass;
        this.taskIcon = btnFinishTaskClassFA;
        this.taskFrame = `<div class="task">
        <p class="task-desc">
        ${this.taskDesc}
        </p>
        <button class="task-button ${this.taskIcon} fas ${this.taskIcon}"></button>
        <button class="task-button ${btnDeleteTaskClass} fas ${btnDeleteTaskClassFA}"></button>
      </div>`;
    }

   toggleState() {
       //if the task in time of the click is not finished (true), toggle the icons 
       //and add class for finished state else toggle back
        if(this.taskNotFinished === true) {
            this.taskNotFinished = false;
            this.taskClass = btnUndoTaskClass;
            this.taskIcon = btnUndoTaskClassFA;
        } else {
            this.taskNotFinished = true;
            this.taskClass = btnFinishTaskClass;
            this.taskIcon = btnFinishTaskClassFA;
        }
    }
}


//prevent default reset on submit

submitTask.addEventListener("click", (event) => {
    event.preventDefault();
});