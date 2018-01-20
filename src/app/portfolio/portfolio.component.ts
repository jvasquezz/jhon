import { Component, HostListener, OnInit } from '@angular/core';
import { DesktopOrMobileView } from '../desktop-or-mobile';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() {
    this.deskMobile = DesktopOrMobileView.NewInstance(false);
  }

  deskMobile: DesktopOrMobileView;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.deskMobile.setView(window.innerWidth);
  }

  ngOnInit() {
    this.deskMobile.setView(window.innerWidth);
  }

}
