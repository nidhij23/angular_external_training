
import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<button (click)="clicked($event)">Click ME</button><br>
                <input (keyup)="onKey($event)">
                <p>{{values}}</p><br>
               <!-- <input #val (keyup)="test"> //test can be any name-->
               <input #val (keyup)="test(val.value)">     
           
                <p>{{val.value}}</p>
                <input #box 
                (keyup.enter)="onEnter(box.value)" (blur)="onEnter(box.value)">
                <p>{{value}}</p>
                Which Key: {{which}}`,
    host:{'(window:keydown)':'hotkeys($event)'}

})
export class AppComponent {
  clicked($event: Event) {
    console.log($event);
  }
  values: string = '';
  // onKey(event: any) {
  //   this.values = event.target.value;
  //   // console.log(event);
  // }
  onKey(event: KeyboardEvent) {
    //this.values = event.target.value;    //this is javscript  style
    this.values = (<HTMLInputElement>event.target).value; //this is typescript style -->defining type of UI type
  }
  myval:string=''; 
  test(value:string){
    this.myval=value;
  }

  value = 'Old Value';
    onEnter(value: string) {
        console.log('Event is called!');
        this.value = value;
    }
    which:string="";
    hotkeys(event:any){
      this.which=event.which; //which is pre-defined key word
      console.log(event.which);
    }

}

