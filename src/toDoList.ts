console.log("Script toDoList.js is running");

  class ToDoList {
    private tasks: string[] = [];

    constructor() {
      const addButton = document.getElementById("agregar-tarea");
      if (addButton) {
        addButton.addEventListener("click", () => {
          this.addTaskFromInput();
        });
      }
      this.linkClickEvent();
    }

    getTasks(): string[] {
      return this.tasks;
    }

    addTask(newTask: string): void {
      this.tasks.push(newTask);

      this.updateTaskList();

    }

    linkClickEvent(): void {
      const clickEvent = document.getElementById("agregar-tarea");
      if(clickEvent) {
        clickEvent.addEventListener("click", () => {
          this.showTasks();
        });
      }
    }

    showTasks(): void {
      const taskList = document.getElementById("lista-tareas");
      if(taskList) {
        taskList.innerHTML = "";
        
        this.tasks.forEach((task) => {
          console.log("showTasks called"); 
          const listItem = document.createElement("li");
          listItem.textContent = task;
          taskList.appendChild(listItem);
        })
      }
    }

    private updateTaskList(): void {
      const taskListElement = document.getElementById("lista-tareas");
      if(taskListElement) {
        const listItem = document.createElement("li");
        listItem.textContent = this.tasks[this.tasks.length - 1];

        taskListElement.appendChild(listItem);
      }
    }
    addTaskFromInput(): void {
      const inputElement = document.getElementById("nueva-tarea") as HTMLInputElement;
      const newTask = inputElement.value;

      this.addTask(newTask);

      inputElement.value = "";
      console.log("addTaskFromInput called");
    }
  }

  
export default ToDoList;

(window as any).linkClickEvent = () => {
const toDoList = new ToDoList();
toDoList.linkClickEvent();
}

