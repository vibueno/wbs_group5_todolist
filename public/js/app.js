/*
 *
 * Constants
 *
 */

const btnAddTask = document.getElementById('add_task');
const TODOList = document.querySelector('.section-tasks__todo-wrapper');
const finishedList = document.querySelector(".section-tasks__finished-wrapper");
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

/**
 * @description move a task from the task list to finished list.
 */
const finishTask = event => {
  //user has clicked on button but not on icon
  if(event.target.classList.contains('done-task')) {
    //store innerHtml of the task
    const storeTask = event.target.parentNode.innerHTML;
    event.target.parentNode.remove();
    moveTask(".section-tasks__finished-wrapper", storeTask, "finished");
  //user has clicked on icon
  } else if (event.target.parentNode.classList.contains("done-task")) {
    const storeTask = event.target.parentNode.parentNode.innerHTML;
    event.target.parentNode.parentNode.remove();
    moveTask(".section-tasks__finished-wrapper", storeTask, "finished");
  }
};

/**
 * @description change the icon according to the list where is the item
 * 
 */

const changeIcon = (parentClass, classToDelete, classToAdd) => {
  //get all the icons
  const icons = document.querySelectorAll(`i`);
  console.log(icons);
  for(let i = 0; i < icons.length; i++) {
    //check to which tasks icon need to be changed
    if(icons[i].parentNode.parentNode.classList.contains(parentClass) && icons[i].classList.contains(classToDelete)) {
      icons[i].classList.remove(classToDelete);
      icons[i].classList.add(classToAdd);
    }
  }
};

/**
 * @description select a list and add task
 */
const moveTask = (parentClass, stringToPass, classToAdd) => {
  const parent = document.querySelector(parentClass);
  parent.innerHTML += `<div class="section-tasks__task ${classToAdd}"> ${stringToPass} </div>`;
  changeIcon("finished", "fa-check", "fa-undo");
}

/*
 *
 * Events
 *
 */

btnAddTask.addEventListener('click', addTask);

//Using event delegation
TODOList.addEventListener('click', deleteTask);
TODOList.addEventListener("click", finishTask);

//Small function to remove default refreshing behaviour, when clicking on submit button
document.getElementById('add_task').addEventListener(
  'click',
  function (e) {
    e.preventDefault();
  },
  false
);
