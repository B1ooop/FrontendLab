import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header: ElementRef;
  @Output() headerHeight = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.headerHeight.emit(this.header.nativeElement.offsetHeight);
  }
}
