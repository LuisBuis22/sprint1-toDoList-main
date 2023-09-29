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
    }
}
exports.default = ToDoList;

import ToDoList from 'src/toDoList.ts'

document.addEventListener("DOMContentLoaded", () => {
  
});
//# sourceMappingURL=toDoList.js.map