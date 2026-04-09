import { Component, OnInit, Input } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { FaceSnap } from '../models/snap.model';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [DatePipe, NgStyle, NgClass],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = "J'adore !";
    this.userHasSnapped = false;
  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Ne plus adorer';
    this.userHasSnapped = true;
  }

  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = "J'adore !";
    this.userHasSnapped = false;
  }
}
