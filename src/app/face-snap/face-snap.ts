//import { Input } from '@angular/core';
import { DatePipe, UpperCasePipe, NgClass, CurrencyPipe } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    DatePipe,
    NgStyle,
    NgClass,
    UpperCasePipe,

    //LowerCasePipe,
    //TitleCasePipe,
    //LowerCasePipe,
    //TitleCasePipe,

    CurrencyPipe,
  ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;
  myPrice: number = 330.45;

  constructor(private faceSnapsService: FaceSnapsService) {}
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
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Ne plus adorer';
    this.userHasSnapped = true;
  }

  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = "J'adore !";
    this.userHasSnapped = false;
  }
}
