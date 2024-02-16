let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function () {
  let savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    text.innerHTML = savedTasks;
    addDeleteListeners(); // Add delete listeners to the loaded tasks
  }
});

function addDeleteListeners() {
  let tasks = document.querySelectorAll("ul");
  tasks.forEach((task) => {
    task.querySelector("i").addEventListener("click", function () {
      task.remove();
      saveData();
    });
  });
}

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let newEle = document.createElement("ul");
    newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
    newEle.prepend(checkbox);
    text.appendChild(newEle);
    saveData();
    inputs.value = "";

    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          newEle.classList.add("checked");
        } else {
          newEle.classList.remove("checked");
        }
        saveData(); // Save changes to checked state
      });


    addDeleteListeners(); // Add delete listener to the new task
  }
}

function saveData() {
  // Save the task list HTML into localStorage
  localStorage.setItem("tasks", text.innerHTML);
}
