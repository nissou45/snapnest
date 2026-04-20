import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/snap.model';
import { Router } from '@angular/router';
import { FACE_SNAPS_UI, APP_ROUTES } from '../core/constants/face-snaps.constants';
import { AppButtonComponent } from '../shared/components/button/button.component';
import { AppCardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [UpperCasePipe, AppButtonComponent, AppCardComponent],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;
  readonly uiConstants = FACE_SNAPS_UI;

  constructor(private router: Router) {}

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`${APP_ROUTES.FACE_SNAPS}/${this.faceSnap.id}`);
  }
}
