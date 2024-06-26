import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Todo } from "../../models/Todo";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "todos",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.scss",
})
export class TodosComponent {
  todos!: Todo[];
  inputValue!: string;

  ngOnInit(): void {
    this.todos = [
      {
        id: crypto.randomUUID(),
        text: "First todo",
        completed: false,
      },
      {
        id: crypto.randomUUID(),
        text: "Second todo",
        completed: true,
      },
    ];
  }

  private checkIfExists(index: number) {
    return index !== -1;
  }

  private findById(id: string) {
    const todoIndex = this.todos.findIndex((todo) => todo.id === id);

    return todoIndex;
  }

  onAdd() {
    if (!this.inputValue) {
      alert("Precisa adicionar um texto");

      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: this.inputValue,
      completed: false,
    } satisfies Todo;

    this.todos.push(newTodo);

    this.inputValue = "";
  }

  onCompleted(id: string) {
    const todoIndex = this.findById(id);

    if (!this.checkIfExists(todoIndex)) {
      alert("Todo não encontrado!");

      return;
    }

    this.todos[todoIndex] = { ...this.todos[todoIndex], completed: true };
  }

  onUndo(id: string) {
    const todoIndex = this.findById(id);

    if (!this.checkIfExists(todoIndex)) {
      alert("Todo não encontrado!");

      return;
    }

    this.todos[todoIndex] = { ...this.todos[todoIndex], completed: false };
  }

  onRemove(id: string) {
    const todoIndex = this.findById(id);

    if (!this.checkIfExists(todoIndex)) {
      alert("Todo não encontrado!");

      return;
    }

    this.todos.splice(todoIndex, 1);
  }
}
