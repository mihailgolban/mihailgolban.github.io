import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { ReposComponent } from './repos/repos.component';

const appRoutes: Routes = [
  { path: '', component: ReposComponent },
  { path: 'projects', component: ReposComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'not-found', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
