import { Component, OnInit } from '@angular/core';
import { Website } from '../website';
import { SocialService } from '../social.service';
// import { WEBSITES } from '../websites';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  social_sites: Website[];

  constructor(private socialService: SocialService) { }

  ngOnInit() {
    this.getWebsites();
  }

  getWebsites(): void {
    this.social_sites = this.socialService.getWebsites();
  }
}
