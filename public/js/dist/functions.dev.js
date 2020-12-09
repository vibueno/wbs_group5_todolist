"use strict";

var button = document.getElementById("add_task");
var container = document.getElementById("tasks");
var input = document.getElementById("user_input");

var AddTask = function AddTask() {
  var paragraph = document.createElement("p");
  paragraph.innerText = input.value;
  container.appendChild(paragraph);
};

button.addEventListener("click", AddTask);