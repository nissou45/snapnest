import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaceSnap } from '../models/snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { SnapType } from '../models/snap-type-type';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-single-face-snap',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
    const faceSnapId = this.route.snapshot.params['id'];
  }

  private prepareInterface() {
    this.snapButtonText = "J'adore!";
    this.userHasSnapped = false;
  }

  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    const snapType: SnapType = this.userHasSnapped ? 'unsnap' : 'snap';
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, snapType);
    this.userHasSnapped = !this.userHasSnapped;
    this.snapButtonText = this.userHasSnapped ? "Je n'adore plus" : "J'adore !";
  }
}
