import { Component, HostListener, OnInit } from '@angular/core';
import { Website } from '../website';
import { SocialService } from '../services/social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(window:scroll)': 'updateNavBar($event)'
  }
})
export class SocialComponent implements OnInit {

  social_sites: Website[];

  constructor(private socialService: SocialService) { }

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 1;

  innerWidth: Number;

  updateNavBar(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if ( this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit() {
    this.getWebsites();
    this.innerWidth = window.innerWidth;
  }

  getWebsites(): void {
    this.social_sites = this.socialService.getWebsites();
  }
}
