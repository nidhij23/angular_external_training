import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppTrainer } from './app.trainerManagement';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AppTrainer],
  bootstrap: [AppComponent]
})
export class AppModule { }
