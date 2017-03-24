// import { Component, Output, EventEmitter } from '@angular/core';
// @Component({
//     selector: 'my-child',
//     template: `<h2>Child</h2>
//                 <button (click)="updateParent()">UpdateParent</button>
//                 `
// })
// export class ChildComponent {

//     @Output() onIncrement = new EventEmitter<number>();
//     counter: number = 0;
//     updateParent() {
//         this.counter++;
// 	console.log('Going to Update Parent');
//         this.onIncrement.emit(this.counter);

//     }
// }
// @Component({
//     selector: 'my-app',
//     template: `
//                 <h1>Parent</h1>
//                 <h2>Counter:{{counter}}</h2>
//                <my-child (onIncrement)="increment($event)"></my-child>
//               `
// })
// export class AppComponent {
//     counter: number = 0;
//     increment(counter: number) {
//         this.counter = counter;
//         console.log(counter);
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Component } from '@angular/core'

@Component({
    selector: 'my-app',
    template: `<p>The heros birthday is {{birthday|date}}</p>
   <p>exponetial value is {{expo|exponentialStrength:4}}</p>

   `
})
export class AppComponent {
    birthday = new Date(1998, 3, 15);
    expo = 10;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

