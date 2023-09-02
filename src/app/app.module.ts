import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { BlogsComponent } from './blog/blogs/blogs.component';
import { ContactComponent } from './home/contact/contact.component';
import { ServiceComponent } from './flair/service/service.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { MeetingComponent } from './meeting/meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    BlogsComponent,
    ContactComponent,
    ServiceComponent,
    AboutUsComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
