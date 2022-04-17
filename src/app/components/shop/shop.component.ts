import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  private headerMargin: ElementRef;
  @ViewChild('headerMargin') set headerMarginContent(headerMarginContent: ElementRef) {
    if (headerMarginContent) { this.headerMargin = headerMarginContent; }
  }

  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  calcHeaderMargin(headerHeight) {
    if (!this.headerMargin) { return; }
    this.renderer.setStyle(this.headerMargin.nativeElement, 'height', `${headerHeight}px`);
  }

}
