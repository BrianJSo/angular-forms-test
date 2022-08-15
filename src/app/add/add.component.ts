import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { Todo } from '../models';
import { TodoFormModule } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {
  handleSubmit(todo: Todo) {
    console.log(todo);
  }
}

@NgModule({
  imports: [CommonModule, TodoFormModule],
  declarations: [AddComponent],
  exports: [AddComponent],
})
export class AddModule {}
