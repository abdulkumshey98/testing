import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexhomeComponent } from './components/indexhome/indexhome.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';

const routes: Routes = [
  {path: '', component: IndexhomeComponent},
  {path: 'web-development', component: WebDevelopmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [IndexhomeComponent, WebDevelopmentComponent]
