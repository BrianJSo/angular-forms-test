import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
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
  declarations: [AddComponent],
  exports: [AddComponent],
})
export class AddModule {}
