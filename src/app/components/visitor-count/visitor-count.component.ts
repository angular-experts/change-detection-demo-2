import {Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-visitor-count',
  templateUrl: './visitor-count.component.html',
  styleUrls: ['./visitor-count.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorCountComponent {

  visitorCount = 0;

  constructor(private cdr: ChangeDetectorRef) {

    setInterval(() => {
      this.visitorCount ++;

      // If you are using ChangeDetectionStrategy.OnPush ,
      // the following is required, otherwise the view will not be updated
      this.cdr.markForCheck();
    }, 1000);
  }

}
