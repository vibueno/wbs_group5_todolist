const button = document.getElementById("add_task");
const container = document.getElementById("tasks");
const input  = document.getElementById("user_input");


 function AddTask() {
    const Parent = document.querySelector(".section-tasks__todo-wrapper");
    const input = document.getElementById("user_input").value;
    let  newTask = `<div class="section-tasks__task">
          <p class="section-tasks__task-desc">`+ input +`</p>
          <button class="section-tasks__task-button"><i class="fas fa-check"></i></button>
          <button class="section-tasks__task-button"><i class="fas fa-trash-alt"></i></button>
        </div>`;
    Parent.innerHTML+=newTask;

    
    
    
}

button.addEventListener("click",AddTask);

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
document.getElementById("add_task").addEventListener("click", function(e){
    e.preventDefault();
}, false);
