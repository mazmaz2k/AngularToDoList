import { Item } from './item';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {

    transform(value: any[], ...args: any[]) {
        if (!value) {
            return value;
        }
        const newVal = value.sort((a: any, b: any) => {
           const date1 = a.date.split('/');
           const date2 = b.date.split('/');
           const time1 = a.time.split(':');
           const time2 = b.time.split(':');
           return this.checkBiggestDate(date1, date2, time1, time2);
        });
        return newVal;
    }

    checkBiggestDate(date1, date2, time1, time2): number {
        if (+date1[2] > +date2[2]) {
            return 1;
        } else if (+date1[2] < +date2[2]) {
            return -1;
        } else {
             if (+date1[1] > +date2[1]) {
                 return 1;
             } else if (+date1[1] < +date2[1]) {
                 return -1;
             } else {
                if (+date1[0] > +date2[0]) {
                    return 1;
                } else if (+date1[0] < +date2[0]) {
                    return -1;
                } else {
                    if (+time1[0] > +time2[0]) {
                        return 1;
                    } else if (+time1[0] > +time2[0]) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
             }
        }
    }
}
