import { SafeResourceUrl, SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  safeURL: SafeUrl;
  videoURL = 'https://www.youtube.com/embed/5D6_INFDxO4?modestbranding=1&rel=0&controls=1&showinfo=0&fs=1';
  constructor(private _sanitizer: DomSanitizer) {
  }

  innerWidth: Number;
  isMobile: boolean;
  isDesktop: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    this.setMobileOrDesktopView(this.innerWidth);
  }

  setMobileOrDesktopView(wWidth) {
    this.isMobile = false;
    this.isDesktop = false;
    if (wWidth < 719) {
      this.isMobile = true;
    } else if (wWidth > 1019) {
      this.isDesktop = true;
    }
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setMobileOrDesktopView(this.innerWidth);
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

}
