import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { TodoFormModule } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {}

@NgModule({
  imports: [CommonModule, TodoFormModule],
  declarations: [AddComponent],
  exports: [AddComponent],
})
export class AddModule {}
