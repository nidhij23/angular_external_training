import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';



@Injectable()
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let trainers = [
            { id: 11, name: 'Geeta' },
            { id: 12, name: 'Ram' },
            { id: 13, name: 'Gopal' },
            { id: 14, name: 'Verma' },
            { id: 15, name: 'Sanjay' },
            { id: 16, name: 'Leela' },
            { id: 17, name: 'Bhansali' },
            { id: 18, name: 'Koyala' },
            { id: 19, name: 'Ramesh' },
            { id: 20, name: 'Subramanian' }
        ];
        return {trainers};
    }
}