import { Component, Input, Self, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { NgbDateStruct, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements ControlValueAccessor, OnInit {
  @Input() label = '';
  @Input() maxDate: Date | undefined;
  ngBMaxDate: NgbDateStruct | undefined;
  bsConfig: Partial<NgbDatepickerConfig> | undefined;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    // this.bsConfig = {
    //   containerClass: 'theme-dark-blue',
    //   dateInputFormat: 'DD MMMM YYYY',
    // };
  }

  // onDateSelect(event: any) {
  //   const year = event.year;
  //   const month = event.month <= 9 ? '0' + event.month : event.month;
  //   const day = event.day <= 9 ? '0' + event.day : event.day;
  //   let finalDate = year + ' ' + month + ' ' + day;
  //   this.ngControl.control?.setValue(finalDate);
  // }

  ngOnInit(): void {
    if (this.maxDate) {
      this.ngBMaxDate = {
        year: this.maxDate.getFullYear(),
        month: this.maxDate.getMonth() + 1,
        day: this.maxDate.getDate(),
      };
    }
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }
}
