import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('footer') footer: ElementRef;
  @Output() footerHeight = new EventEmitter();

  public currentYear = moment().year();

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.footerHeight.emit(this.footer.nativeElement.offsetHeight);
  }

}
