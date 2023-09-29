import ToDoList from "../toDoList";

describe("Estado inicial de la lista", () => {
  it("La lista de tareas debe estar vacía inicialmente", () => {
    const toDoList = new ToDoList();
    expect(toDoList.getTasks()).toEqual([]);
  });
});

describe("Enlazar elemento html a la variable newTask", () => {
  it("La tarea escrita por el ususario en un campo input, debe almacenarse y guardarse en la lista", () => {
    const toDoList = new ToDoList();
    let newTask: string = "Nueva Tarea";
    toDoList.addTask(newTask);
    expect(toDoList.getTasks()).toEqual([newTask]);
  });
});
