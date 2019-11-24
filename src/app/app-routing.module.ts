import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './dashboard/main/main.component';
import { StoriesComponent } from './dashboard/stories/stories.component';
import { PhotosComponent } from './dashboard/photos/photos.component';
import { MapComponent } from './dashboard/map/map.component';
import { ContactComponent } from './dashboard/contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
