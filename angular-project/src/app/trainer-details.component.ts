import { Component, Input } from '@angular/core';
import { Trainer } from './app.trainer';

@Component({
  selector: 'trainer-detail',
  template: `<div *ngIf="selectedTrainer">
  <h2>{{selectedTrainer.name}} details!</h2>

    <div ><label>ID :</label> {{selectedTrainer.id}}</div>
     <div><label>Name :</label> <input [(ngModel)]="selectedTrainer.name" placeholder="name"></div>
  </div>`
})

export class TrainerDetail {
  //selectedTrainer :Trainer;
  @Input('trainerInfo') selectedTrainer: Trainer;
}