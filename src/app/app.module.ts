import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageComponent } from './page/page.component';
import { PathsComponent} from './shared/paths.component';
import { SideMenuComponent } from './shared/side-menu/side-menu.component';
import { AboutComponent } from './about/about.component';
import { OurJobComponent } from './our-job/our-job.component';
import { ContactComponent } from './contact/contact.component';
import { WhyWeComponent } from './why-we/why-we.component';
import { WhatWeComponent } from './what-we/what-we.component';
import { BottomComponent } from './bottom/bottom.component';
import { HeadComponent } from './head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PathsComponent,
    SideMenuComponent,
    AboutComponent,
    OurJobComponent,
    ContactComponent,
    WhyWeComponent,
    WhatWeComponent,
    BottomComponent,
    HeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
