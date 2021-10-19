import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexhomeComponent } from './components/indexhome/indexhome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SvgsComponent } from './components/svgs/svgs.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';
import { AppDevelopmentComponent } from './components/app-development/app-development.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactPartnersComponent } from './components/contact-partners/contact-partners.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { OurProjectsComponent } from './components/our-projects/our-projects.component';
import { CareersComponent } from './components/careers/careers.component';
import { GroceryComponent } from './components/grocery/grocery.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexhomeComponent,
    NavbarComponent,
    SvgsComponent,
    FooterComponent,
    OurServicesComponent,
    WebDevelopmentComponent,
    AppDevelopmentComponent,
    ContactComponent,
    ContactPartnersComponent,
    InvestorsComponent,
    OurProjectsComponent,
    CareersComponent,
    GroceryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
