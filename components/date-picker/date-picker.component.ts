import { forwardRef, ChangeDetectorRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { DateHelperService } from '../i18n/date-helper.service';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { DateRangePickerComponent } from './date-range-picker.component';

@Component({
  selector   : 'nz-date-picker',
  templateUrl: './date-range-picker.component.html',
  providers  : [ {
    provide    : NG_VALUE_ACCESSOR,
    multi      : true,
    useExisting: forwardRef(() => NzDatePickerComponent)
  } ],
  host       : {
    '[class.ant-calendar-picker]': 'true'
  }
})

export class NzDatePickerComponent extends DateRangePickerComponent {
  isRange: boolean = false;

  constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService) {
    super(i18n, cdr, dateHelper);
  }
}
