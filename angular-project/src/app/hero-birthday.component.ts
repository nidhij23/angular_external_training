import {Component} from '@angular/core';

@Component({
    selector:'hero-component',
    template:`<p>The heros birthday is {{birthday|date}}</p>`
})

export class HeroBirthday{
    birthday=new Date(1998,3,15);
}