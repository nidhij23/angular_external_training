//Different Layouts
import { Component } from '@angular/core';
import { TRAINERS } from './trainer_mock';
import { Trainer } from './app.trainer';



@Component({
    selector: 'my-trainer',
    template: `<h1>{{title}}</h1>
  <ul class="trainers">
    <li [class.selected]="trainer===selectedTrainer" (click)="onSelect(trainer)" *ngFor="let trainer of trainers">
      <span class="badge">{{trainer.id}}</span>
      {{trainer.name}}
    </li>
  </ul>
  <div *ngIf="selectedTrainer">
  <h2>{{selectedTrainer.name}} details!</h2>

    <div><label>ID :</label> {{selectedTrainer.id}}</div>
     <div><label>Name :</label> <input [(ngModel)]="selectedTrainer.name" placeholder="name"></div>
  </div>
  `,
    styles: [`
  selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .trainers {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
    float:left;
  }
  .trainers li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .trainers li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .trainers li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .trainers .text {
    position: relative;
    top: -3px;
  }
  .trainers .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }`]
})
export class AppTrainer {
    trainers = TRAINERS;
    selectedTrainer: Trainer; //if initially this is not given a value then the template will throw an error
    onSelect(trainer: Trainer): void {
        this.selectedTrainer = trainer;
        console.log('clicked', trainer);
    }

}

