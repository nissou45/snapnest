import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FACE_SNAPS_UI, APP_ROUTES } from '../core/constants/face-snaps.constants';
import { AppButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  readonly uiConstants = FACE_SNAPS_UI;

  constructor(private router: Router) {}
  onContinue() {
    this.router.navigateByUrl(`/${APP_ROUTES.FACE_SNAPS}`);
  }
}
