import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Todo } from "../../models/Todo";

@Component({
  selector: "todos",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.scss",
})
export class TodosComponent {
  todos!: Todo[];

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
}
