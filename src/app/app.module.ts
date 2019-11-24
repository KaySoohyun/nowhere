import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MainComponent } from './dashboard/main/main.component';
import { StoriesComponent } from './dashboard/stories/stories.component';
import { MapComponent } from './dashboard/map/map.component';
import { PhotosComponent } from './dashboard/photos/photos.component';
import { ContactComponent } from './dashboard/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ErrorPageComponent,
    MainComponent,
    StoriesComponent,
    MapComponent,
    PhotosComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
