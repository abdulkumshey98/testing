import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AppDevelopmentComponent } from './components/app-development/app-development.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactComponent } from './components/contact/contact.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { IndexhomeComponent } from './components/indexhome/indexhome.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';

const routes: Routes = [
  {path: '', component: IndexhomeComponent},
  {path: 'web-development', component: WebDevelopmentComponent},
  {path:'contact-us', component: ContactComponent},
  {path: 'investments', component: InvestorsComponent},
  {path: 'careers', component: CareersComponent},
  {path: 'grocery', component: GroceryComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'web-development', component: WebDevelopmentComponent},
  {path: 'app-development', component: AppDevelopmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [IndexhomeComponent, WebDevelopmentComponent, ContactComponent, CareersComponent, GroceryComponent, BlogsComponent, AboutComponent, WebDevelopmentComponent, AppDevelopmentComponent]
