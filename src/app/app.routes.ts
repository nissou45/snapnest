import { Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list';
import { Component } from '@angular/core';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
  {
    path: 'face-snaps',
    component: FaceSnapListComponent,
  },
  {
    path: '',
    component: LandingPage,
  },
];
