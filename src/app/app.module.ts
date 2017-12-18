import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialService } from './social.service';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SocialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
