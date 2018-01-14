import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<disqus [identifier]="pageId"></disqus>`,
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  pageId = '/post/not-found';
  language = 'english';
  thispageurl = '';

  constructor() { }

  ngOnInit() {
  }

}
