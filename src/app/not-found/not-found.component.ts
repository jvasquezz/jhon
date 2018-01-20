import { Component, OnInit, HostListener } from '@angular/core';
import { DesktopOrMobileView } from '../desktop-or-mobile';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  pageId = '/post/not-found';
  language = 'english';
  thispageurl = '';

  deskMobile: DesktopOrMobileView;

  constructor() {
    this.deskMobile = DesktopOrMobileView.NewInstance(false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.deskMobile.setView(window.innerWidth);
  }

  ngOnInit() {
    this.deskMobile.setView(window.innerWidth);
  }

}
