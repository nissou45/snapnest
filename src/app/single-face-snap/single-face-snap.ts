import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FaceSnap } from '../models/snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { SnapType } from '../models/snap-type-type';
import { UpperCasePipe } from '@angular/common';
import { FACE_SNAPS_UI, APP_ROUTES } from '../core/constants/face-snaps.constants';
import { AppButtonComponent } from '../shared/components/button/button.component';
import { AppCardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, AppButtonComponent, AppCardComponent],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  snapButtonText!: string;
  userHasSnapped!: boolean;
  readonly uiConstants = FACE_SNAPS_UI;
  readonly routes = APP_ROUTES;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  private prepareInterface() {
    this.snapButtonText = this.uiConstants.SNAP;
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
    this.snapButtonText = this.userHasSnapped ? this.uiConstants.UNSNAP : this.uiConstants.SNAP;
  }
}
