
  class ToDoList {
    private tasks: string[] = [];

    getTasks(): string[] {
      return this.tasks;
    }

    addTask(newTask: string): void {
      this.tasks.push(newTask);

      this.updateTaskList();

    }

    private updateTaskList(): void {
      const taskListElement = document.getElementById("lista-tareas");
      if(taskListElement) {
        const listItem = document.createElement("li");
        listItem.textContent = this.tasks[this.tasks.length - 1];

        taskListElement.appendChild(listItem);
      }
    }
  }

  
export default ToDoList;



