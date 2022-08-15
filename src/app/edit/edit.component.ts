import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { TodoFormModule } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditComponent {}

@NgModule({
  imports: [CommonModule, TodoFormModule],
  declarations: [EditComponent],
  exports: [EditComponent],
})
export class EditModule {}
