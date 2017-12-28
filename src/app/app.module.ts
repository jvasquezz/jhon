import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialService } from './social.service';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpdatesComponent } from './updates/updates.component';
import { UpdatesService } from './updates.service';
import { ExpandableListModule } from 'angular2-expandable-list';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    GalleryComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    ExpandableListModule,
  ],
  providers: [SocialService, UpdatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
