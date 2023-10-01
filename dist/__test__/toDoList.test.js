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
describe("Mostrar tareas en una lista", () => {
    it("Las tareas guardadas deben irse mostrando en un lista en pantalla", () => {
        const toDoList = new toDoList_1.default();
        let newTask = "Nueva Tarea";
        toDoList.addTask(newTask);
        expect(toDoList.getTasks()).toContain(newTask);
    });
});
describe('Imprimir tareas en pantalla', () => {
    it("Enlazar el evento onclick con la función showTasks", () => {
        const clickEvent = document.createElement("button");
        clickEvent.id = "agregar-tarea";
        document.body.appendChild(clickEvent);
        const toDoList = new toDoList_1.default();
        document.body.removeChild(clickEvent);
        toDoList.linkClickEvent();
        expect(() => toDoList.showTasks()).not.toThrowError();
    });
});
//# sourceMappingURL=toDoList.test.js.map