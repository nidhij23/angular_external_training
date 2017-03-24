import {
    Component,
    Input,
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    ViewChild

} from '@angular/core';

@Component({
    selector: 'my-child-view',
    template: `<label>ChildView</label><input [(ngModel)]="hero">`
})
export class ChildViewComponent {
    hero = 'Magneta';
}


@Component({
    selector: 'life-child',
    template: `<div>{{name}}</div>
               <my-child-view></my-child-view>
                `
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit,AfterViewChecked {
    @Input() name: string;
    constructor() {
        console.log('Constructor is called');
    }
    ngOnChanges() {
        console.log('Changes started!');
    }
    ngOnInit() {
        console.log('Component init is called');
    }
    ngDoCheck() {
        //you can watch inside component what component has been
        //changed
        console.log('Component is changed');
    }
    ngAfterViewInit() {
        console.log('Child View intialization started!');
    }
    @ViewChild(ChildViewComponent) viewChild: ChildViewComponent;

    ngAfterViewChecked() {
          console.log('Child view is checked!'+this.viewChild.hero);
    }


}


@Component({
    selector: 'my-app',
    template: `<div>
              <label>Parent:</label><input [(ngModel)]="myname">
             <life-child [name]="myname"></life-child>
            </div>`,
})
export class AppComponent {

}