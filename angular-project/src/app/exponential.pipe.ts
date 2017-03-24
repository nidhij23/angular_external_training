import { Pipe, PipeTransform } from '@angular/core';
//Pipe and PipeTransform must be imported and these are to be injected in the declarations section
@Pipe({
    name: 'exponentialStrength'
})

export class ExponentialStrength implements PipeTransform {
    transform(value: number, exponent: string): number {
        let exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}