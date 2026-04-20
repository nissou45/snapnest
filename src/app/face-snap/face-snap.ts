import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/snap.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [DatePipe, NgClass, UpperCasePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`face-snaps/${this.faceSnap.id}`);
  }
}
