import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { switchMap } from 'rxjs';
import { Todo } from '../models';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnInit {
  todoForm!: FormGroup;
  @Input() todo: Todo;
  @Output() submitTodo = new EventEmitter<Todo>();

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      completed: [false],
    });
  }

  submitForm() {
    if (this.todoForm.valid) {
      this.submitTodo.emit(this.todoForm.value);
    }
  }

  ngOnInit() {
    console.log(this.todo);
    if (this.todo) {
      this.todoForm.patchValue(this.todo);
    }
  }
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
})
export class TodoFormModule {}
