"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toDoList_1 = __importDefault(require("../toDoList"));
describe("Estado inicial de la lista", () => {
    it("La lista de tareas debe estar vacía inicialmente", () => {
        const toDoList = new toDoList_1.default();
        expect(toDoList.getTasks()).toEqual([]);
    });
});
describe("Enlazar elemento html a la variable newTask", () => {
    it("La tarea escrita por el ususario en un campo input, debe almacenarse y guardarse en la lista", () => {
        const toDoList = new toDoList_1.default();
        let newTask = "Nueva Tarea";
        toDoList.addTask(newTask);
        expect(toDoList.getTasks()).toEqual([newTask]);
    });
});
//# sourceMappingURL=toDoList.test.js.map