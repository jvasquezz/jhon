import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialService } from './services/social.service';

import { AppComponent } from './app.component';
import { SocialComponent } from './social/social.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpdatesComponent } from './updates/updates.component';
import { UpdatesService } from './services/updates.service';
import { ExpandableListModule } from 'angular2-expandable-list';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './/app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ReadingComponent } from './reading/reading.component';
import { ReadingService } from './services/reading.service';
import { CodeRepositoryComponent } from './container/code-repository/code-repository.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DisqusModule } from '../../node_modules/ngx-disqus';

@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    GalleryComponent,
    UpdatesComponent,
    SidebarComponent,
    PortfolioComponent,
    AboutComponent,
    ReadingComponent,
    CodeRepositoryComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ExpandableListModule,
    AppRoutingModule,
    DisqusModule.forRoot('jvasquezz'),
  ],
  providers: [ReadingService, SocialService, UpdatesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
