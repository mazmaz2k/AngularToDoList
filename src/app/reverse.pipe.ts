import { Item } from './item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value: any[], ...args: any[]) {
        return value && value.reverse() ;
    }

}
