import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { Todo } from '../models';
import { TodoFormModule } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent {
  todo: Todo = {
    title: 'sample',
    completed: true,
  };

  handleSubmit(todo: Todo) {
    console.log(todo);
  }
}

@NgModule({
  imports: [CommonModule, TodoFormModule],
  declarations: [EditComponent],
  exports: [EditComponent],
})
export class EditModule {}
