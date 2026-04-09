//import { Input } from '@angular/core';
import { DatePipe, UpperCasePipe, NgClass, CurrencyPipe } from '@angular/common';
import { NgStyle } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/snap.model';
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
