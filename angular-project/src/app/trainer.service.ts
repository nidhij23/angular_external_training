import { Injectable } from '@angular/core'
import { Trainer } from './app.trainer';
import { TRAINERS } from './trainer_mock';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import 'rxjs';

@Injectable()
export class TrainerService {

    private url='api/trainers' //URL to web api -->api is predefined key and what is being returned is the second param
    constructor(private http:Http){}
    // //apis are created 

    getTrainerDetails():Promise<Trainer[]>{
        return this.http.get(this.url)
        .toPromise()
        .then(response =>{
            console.log(response.json());
             response.json().data as Trainer[]
            })
        .catch(err =>{ console.log('er-- ',err);
             return err});
    }
    // getTrainerDetails(): Promise<Trainer[]> {
    //     // return Promise.resolve(TRAINERS);  // pure promise
    //     return new Promise<Trainer[]>(resolve => setTimeout(resolve, 5000)) ///delayed promise
    //         .then(() => TRAINERS);
    // }

    // getTrainerDetails(): Trainer[] {
    //     return TRAINERS;//array
    // }
}