import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: any): string
  {
    let today = moment();
    let birthdate = moment(value);
    let years = today.diff(birthdate, 'years');
    let months = today.subtract(years, 'years').diff(birthdate, 'months');
    if(months > 0 ) years += 1;
    let html: string = years + "";
    return html;
  }
}
