"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Script toDoList.js is running");
class ToDoList {
    constructor() {
        this.tasks = [];
        const addButton = document.getElementById("agregar-tarea");
        if (addButton) {
            addButton.addEventListener("click", () => {
                this.addTaskFromInput();
            });
        }
        this.linkClickEvent();
    }
    getTasks() {
        return this.tasks;
    }
    addTask(newTask) {
        this.tasks.push(newTask);
        this.updateTaskList();
    }
    linkClickEvent() {
        const clickEvent = document.getElementById("agregar-tarea");
        if (clickEvent) {
            clickEvent.addEventListener("click", () => {
                this.showTasks();
            });
        }
    }
    showTasks() {
        const taskList = document.getElementById("lista-tareas");
        if (taskList) {
            taskList.innerHTML = "";
            this.tasks.forEach((task) => {
                console.log("showTasks called");
                const listItem = document.createElement("li");
                listItem.textContent = task;
                taskList.appendChild(listItem);
            });
        }
    }
    updateTaskList() {
        const taskListElement = document.getElementById("lista-tareas");
        if (taskListElement) {
            const listItem = document.createElement("li");
            listItem.textContent = this.tasks[this.tasks.length - 1];
            taskListElement.appendChild(listItem);
        }
    }
    addTaskFromInput() {
        const inputElement = document.getElementById("nueva-tarea");
        const newTask = inputElement.value;
        this.addTask(newTask);
        inputElement.value = "";
        console.log("addTaskFromInput called");
    }
}
exports.default = ToDoList;
window.linkClickEvent = () => {
    const toDoList = new ToDoList();
    toDoList.linkClickEvent();
};
//# sourceMappingURL=toDoList.js.map