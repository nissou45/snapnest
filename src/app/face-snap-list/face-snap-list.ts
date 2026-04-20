import { Component, OnInit, Signal } from '@angular/core';
import { FaceSnap } from '../models/snap.model';
import { FaceSnapComponent } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: Signal<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }
}
