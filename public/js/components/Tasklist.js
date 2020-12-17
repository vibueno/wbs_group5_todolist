/**
 * @module Tasklist
 */

/**
 * @class
 * @description Tasklist
 *
 * @property {Array}  _tasks  Task list.
 * @property {Number} _nextId Id to be assigned to the next new task.
 */
export default class Tasklist {
  /**
   * @constructor
   * @description Creates a new Tasklist.
   */
  constructor() {
    this._tasks = [];
    this._nextId = 0;
  }

  /**
   * @description Adds a task to the list.
   *
   * @param {Task} Task to be added to the list
   */
  addTask(Task) {
    this._tasks.push(Task);
    this._nextId++;
  }

  /**
   * @description Removes a task from the list.
   *
   * @param {Number} id id of the task to be removed
   */
  removeTask(id) {
    let index = this._tasks.indexOf(id);
    this._tasks.splice(id, index);
  }
}
