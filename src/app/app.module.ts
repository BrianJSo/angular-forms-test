import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { AddComponent, AddModule } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AddModule,
    RouterModule.forRoot([
      { path: '', component: AddComponent },
      { path: 'edit', component: EditComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
