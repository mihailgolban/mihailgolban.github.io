import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './server.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomMaterialModule} from './material.module';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReposComponent } from './repos/repos.component';
import { RepoComponent } from './repos/repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ReposComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
