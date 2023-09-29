
  class ToDoList {
    private tasks: string[] = [];

    getTasks(): string[] {
      return this.tasks;
    }

    addTask(newTask: string): void {
      this.tasks.push(newTask);
    }
  }

  
export default ToDoList;



