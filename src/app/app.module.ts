import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialService } from './social.service';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpdatesComponent } from './updates/updates.component';
import { UpdatesService } from './updates.service';
import { ExpandableListModule } from 'angular2-expandable-list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    GalleryComponent,
    UpdatesComponent,
    SidebarComponent,
    PortfolioComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ExpandableListModule,
    AppRoutingModule,
  ],
  providers: [SocialService, UpdatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
