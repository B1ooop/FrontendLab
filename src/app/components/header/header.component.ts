import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('header') header!: ElementRef;
  @Output() headerHeight: EventEmitter<number> = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.headerHeight.emit(this.header.nativeElement.offsetHeight);
  }

  navigateToHome() {
    this.router.navigate(['/shop']);
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }
}
