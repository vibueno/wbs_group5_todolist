const button = document.getElementById("add_task");
const container = document.getElementById("tasks");
const input  = document.getElementById("user_input");


 const AddTask=()=>{
     let paragraph = document.createElement("p");
    paragraph.innerText=input.value;
    container.appendChild(paragraph);
}


button.addEventListener("click",AddTask);






























                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
