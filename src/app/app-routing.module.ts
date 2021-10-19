import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { IndexhomeComponent } from './components/indexhome/indexhome.component';
import { InvestorsComponent } from './components/investors/investors.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';

const routes: Routes = [
  {path: '', component: IndexhomeComponent},
  {path: 'web-development', component: WebDevelopmentComponent},
  {path:'contact-us', component: ContactComponent},
  {path: 'investments', component: InvestorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [IndexhomeComponent, WebDevelopmentComponent, ContactComponent]
