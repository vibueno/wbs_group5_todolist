/**
 * @module Task
 */

/**
 * @class
 * @description Task
 *
 * @property {Number} _id           Id of the task
 * @property {String} _description  Task content
 * @property {Boolean} _finished     Indicates whether the task has been marked as done.
 */
export default class Task {
  /**
   * @constructor
   * @description Creates a new Tasklist.
   *
   * @param {Number} id           Id of the new task
   * @param {String} description  Task content for the new task
   */
  constructor(id, description) {
    this._id = id;
    this._description = description;
    this._finished = false;
  }

  /**
   * @description Marks a task as done
   */

  markAsDone() {
    this._finished = true;
  }

  /**
   * @description Marks a task as not done
   */
  undoTask() {
    this._finished = false;
  }
}
