/*
 *
 * Constants
 *
 */

const btnAddTask = document.getElementById('add_task');
const TODOList = document.querySelector('.section-tasks__todo-wrapper');
const DONEList = document.querySelector(".section-tasks__finished-wrapper");
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
        <button class="section-tasks__task-button do-task"><i class="fas fa-check"></i></button>
        <button class="section-tasks__task-button delete-task"><i class="fas fa-trash-alt"></i></button>
      </div>`;
    TODOList.innerHTML += newTaskHTML;
  } else {
    alert('Please add some task');
  }
}

/**
 * @description Deletes a task from the task list.
 *
 * @param {Object} event contains information about the event
 * whose listener called this function
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

/**
 * @description move a task from the task list to finished list.
 */
const finishTask = event => {
  //user has clicked on button but not on icon
  if(event.target.classList.contains('do-task')) {
    event.target.querySelector('i').classList.add('fa-undo');
    event.target.querySelector('i').classList.remove('fa-check');
    event.target.parentNode.classList.remove("to-finish");
    event.target.parentNode.classList.add("finished");
    event.target.parentNode.remove();
    const newParent = document.querySelector(".section-tasks__finished-wrapper");
    newParent.append(event.target.parentNode);
  //user has clicked on icon
  } else if (event.target.parentNode.classList.contains("do-task")) {
    event.target.parentNode.querySelector('i').classList.add('fa-undo');
    event.target.parentNode.querySelector('i').classList.remove('fa-check');
    event.target.parentNode.parentNode.classList.remove("to-finish");
    event.target.parentNode.parentNode.classList.add("finished");
    event.target.parentNode.parentNode.remove();
    const newParent = document.querySelector(".section-tasks__finished-wrapper");
    newParent.append(event.target.parentNode.parentNode);
  }
};

const redoTask = event => {
    //user has clicked on button but not on icon
    if(event.target.classList.contains('undo')) {
      event.target.querySelector('i').classList.add('fa-check');
      event.target.querySelector('i').classList.remove('fa-undo');
      event.target.parentNode.classList.remove("finished");
      event.target.parentNode.classList.add("to-finished");
      event.target.parentNode.remove();
      const newParent = document.querySelector(".section-tasks__todo-wrapper");
      newParent.append(event.target.parentNode);
    //user has clicked on icon
    } else if (event.target.parentNode.classList.contains("undo")) {
      event.target.parentNode.querySelector('i').classList.add('fa-check');
      event.target.parentNode.querySelector('i').classList.remove('fa-undo');
      event.target.parentNode.parentNode.classList.remove("finished");
      event.target.parentNode.parentNode.classList.add("to-finish");
      event.target.parentNode.parentNode.remove();
      const newParent = document.querySelector(".section-tasks__todo-wrapper");
      newParent.append(event.target.parentNode.parentNode);
    }
};

/*
 *
 * Events
 *
 */

//Using event delegation
TODOList.addEventListener('click', deleteTask);
TODOList.addEventListener('click', finishTask);
DONEList.addEventListener('click', deleteTask);
DONEList.addEventListener('click', redoTask);

//Small function to remove default refreshing behaviour, when clicking on submit button
addTaskForm.addEventListener('submit', event => {
  event.preventDefault();
  addTask();
});
