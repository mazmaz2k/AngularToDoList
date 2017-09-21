import { Item } from './item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    transform(value: any[], ...args: any[]) {
        if (value == null) {
            return null;
        }
        const array = value.sort((a: any, b: any) => {
            const left = new Date(a.date);
            const right = new Date(b.date);
            console.log('left', left);
            console.log('right', right);
            return  left > right ? 1 : -1 ;

        });

        return array;


    }

}
