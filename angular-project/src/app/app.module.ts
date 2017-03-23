import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TrainerDetail } from './trainer-details.component';
import { TrainerService } from './trainer.service';
import { InMemoryDataService } from './inmemory_data_service';

@NgModule({
  imports: [BrowserModule, FormsModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [AppComponent, TrainerDetail],
  bootstrap: [AppComponent],
  providers: [TrainerService]//angular creates object here
})
export class AppModule { }
