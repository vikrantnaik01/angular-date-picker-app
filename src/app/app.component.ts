import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
// import { ThemePalette } from '@angular/material/core';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-date-picker-app';
  date1: any;
  date2: any;
  public days = '';
  public years = '';
  public months = '';
  color: string = '';
  yearSliderChecked = false;
  monthsSliderChecked = false;
  disabled = false;



  public calculateDiff(fromDate: Date, toDate: Date, yearSliderChecked: boolean, monthsSliderChecked: boolean) {
    if(yearSliderChecked) {
      this.years = moment(toDate).diff(moment(fromDate), 'years').toString();
    }
    else if(monthsSliderChecked){
      this.days = moment(toDate).diff(moment(fromDate), 'days').toString();
    }
    else {
      this.months = moment(toDate).diff(moment(fromDate), 'months').toString();
      this.years = moment(toDate).diff(moment(fromDate), 'years').toString();
      this.days = moment(toDate).diff(moment(fromDate), 'days').toString();
    }
  }

  fromPicker(event: any, isFromPicker: boolean) {
    if(isFromPicker)
      this.date1 = event.value;
    else
      this.date2 = event.value;
  }

  yearSliderToggle() {
    this.yearSliderChecked = !this.yearSliderChecked;
  }

  monthSliderToggle() {
    this.monthsSliderChecked = !this.monthsSliderChecked;
  }
}
