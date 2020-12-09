"use strict";

var button = document.getElementById("add_task");
var container = document.getElementById("tasks");
var input = document.getElementById("user_input");

function AddTask() {
  var Parent = document.querySelector(".section-tasks__todo-wrapper");
  var input = document.getElementById("user_input").value;
  var newTask = "<div class=\"section-tasks__task\">\n          <p class=\"section-tasks__task-desc\">" + input + "</p>\n          <button class=\"section-tasks__task-button\"><i class=\"fas fa-check\"></i></button>\n          <button class=\"section-tasks__task-button\"><i class=\"fas fa-trash-alt\"></i></button>\n        </div>";
  parent.appendchild(newTask);
}

button.addEventListener("click", AddTask);