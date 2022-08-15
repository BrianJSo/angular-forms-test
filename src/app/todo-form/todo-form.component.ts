import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  NgModule,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      completed: [false],
    });
  }

  submitForm() {
    console.log(this.todoForm.value);
    console.log(this.todoForm.valid);
  }

  ngOnInit() {}
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
})
export class TodoFormModule {}
