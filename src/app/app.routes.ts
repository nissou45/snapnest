import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list';
import { LandingPage } from './landing-page/landing-page';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap';

export const routes: Routes = [
  {
    path: 'face-snaps/:id',
    component: SingleFaceSnapComponent,
  },
  {
    path: 'face-snaps',
    component: FaceSnapListComponent,
  },
  {
    path: '',
    component: LandingPage,
  },
];
