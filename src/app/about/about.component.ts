import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  innerWidth: Number;
  isMobile: boolean;
  isDesktop: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setMobileOrDesktopView(this.innerWidth);
  }

  setMobileOrDesktopView(winWidth) {
    this.isMobile = false;
    this.isDesktop = false;
    if (winWidth < 719) {
      this.isMobile = true;
    } else if (winWidth > 1019) {
      this.isDesktop = true;
    }
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setMobileOrDesktopView(this.innerWidth);
  }

}
