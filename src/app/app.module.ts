import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { AddComponent, AddModule } from './add/add.component';
import { EditComponent, EditModule } from './edit/edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AddModule,
    EditModule,
    RouterModule.forRoot([
      { path: '', component: AddComponent },
      { path: 'edit', component: EditComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
