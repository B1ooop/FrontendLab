import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

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
  @ViewChild('contentWrapper') contentWrapper: ElementRef;

  private headerHeight: number = null;
  private footerHeight: number = null;


  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
  }

  setHeaderHeight(height) {
    this.headerHeight = height;
    this.tryToSetContentHeight();
  }
  setFooterHeight(height) {
    this.footerHeight = height;
    this.tryToSetContentHeight();
  }

  tryToSetContentHeight() {
    if (!this.headerHeight || !this.footerHeight || !this.headerMargin) { return; }
    this.renderer.setStyle(this.headerMargin.nativeElement, 'height', `${this.headerHeight}px`);
    this.renderer.setStyle(this.contentWrapper.nativeElement, 'min-height', `calc(100vh - ${this.headerHeight}px - ${this.footerHeight}px`);
  }

}
