import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { ServiceComponent } from './flair/service/service.component';
import { AboutUsComponent } from './about/about-us/about-us.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  {path:'service', component: ServiceComponent},
  {path:'about', component: AboutUsComponent},
  {path:'meeting', component: MeetingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
