/**
 * @module functions
 */

import {
  todoList,
  doneList,
  btnFinishTaskClass,
  btnUndoTaskClass,
  finishedTaskClass,
  btnFinishTaskClassFA,
  btnUndoTaskClassFA
} from './constants.js';

let functions = {
  /**
   * @description Marks task as done and moves it to finished tasks section
   *
   * @param {Tasklist}  TODOList object of the application
   * @param {String}    task     Task oject we want to mark as finished
   * @param {String}    button   finish button of the task in the DOM
   */

  finishTask: (TODOList, task, button) => {
    const targetID = parseInt(task.id);
    const taskArray = TODOList._tasks;

    //Changing button icons
    button.classList.add(btnUndoTaskClassFA);
    button.classList.remove(btnFinishTaskClassFA);

    //Changing button task classes
    button.classList.add(btnUndoTaskClass);
    button.classList.remove(btnFinishTaskClass);

    task.classList.add(finishedTaskClass);
    doneList.append(task);

    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i]._id === targetID) {
        taskArray[i].markAsDone();
      }
    }
  },

  /**
   * @description Marks task as not done and moves it to TODO tasks section
   *
   * @param {Tasklist}  TODOList object of the application
   * @param {String}    task     Task oject we want to mark as finished
   * @param {String}    button   finish button of the task in the DOM
   */

  undoTask: (TODOList, task, button) => {
    const targetID = parseInt(task.id);
    const taskArray = TODOList._tasks;

    //Changing button icons
    button.classList.add(btnFinishTaskClassFA);
    button.classList.remove(btnUndoTaskClassFA);

    //Changing button task classes
    button.classList.add(btnFinishTaskClass);
    button.classList.remove(btnUndoTaskClass);

    task.classList.remove(finishedTaskClass);
    todoList.append(task);

    for (let i = 0; i < taskArray.length; i++) {
      if (taskArray[i]._id === targetID) {
        taskArray[i].undoTask();
      }
    }
  },

  /**
   * @description Deletes a task from both the task array and the DOM
   *
   * @param {Tasklist}  TODOList object of the application
   * @param {String}    task     Task oject we want to mark as finished
   */

  deleteTask: (TODOList, task) => {
    task.remove();
    TODOList.removeTask(task);
  }
};

export { functions };
