/*
 *
 * Constants
 *
 */

const btnAddTask = document.getElementById('add_task');
const TODOList = document.querySelector('.section-tasks__todo-wrapper');
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
        <button class="section-tasks__task-button done-task"><i class="fas fa-check"></i></button>
        <button class="section-tasks__task-button delete-task"><i class="fas fa-trash-alt"></i></button>
      </div>`;
    TODOList.innerHTML += newTaskHTML;
  } else {
    alert('Please add some task');
  }
}

/**
 * @description Deletes a task from the task list.
 */
const deleteTask = event => {
  //user has clicked on button but not on icon
  if (event.target.classList.contains('delete-task')) {
    event.target.parentNode.remove();
    //user has clicked on icon
  } else if (event.target.parentNode.classList.contains('delete-task')) {
    event.target.parentNode.parentNode.remove();
  }
};

/*
 *
 * Events
 *
 */

btnAddTask.addEventListener('click', addTask);

//Using event delegation
TODOList.addEventListener('click', deleteTask);

document.getElementById('add_task').addEventListener(
  'click',
  function (e) {
    e.preventDefault();
  },
  false
);
