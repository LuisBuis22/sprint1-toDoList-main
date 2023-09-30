"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToDoList {
    constructor() {
        this.tasks = [];
    }
    getTasks() {
        return this.tasks;
    }
    addTask(newTask) {
        this.tasks.push(newTask);
        this.updateTaskList();
    }
    updateTaskList() {
        const taskListElement = document.getElementById("lista-tareas");
        if (taskListElement) {
            const listItem = document.createElement("li");
            listItem.textContent = this.tasks[this.tasks.length - 1];
            taskListElement.appendChild(listItem);
        }
    }
}
exports.default = ToDoList;
//# sourceMappingURL=toDoList.js.map