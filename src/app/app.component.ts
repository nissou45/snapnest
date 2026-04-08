import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnap } from './models/snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Salon Bohème',
      'Un coin lecture chaleureux avec des plantes, des coussins en velours et une lumière tamisée.',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
      new Date(),
      10,
    );
    this.mySnap.setLocation('Paris');
    this.myOtherSnap = new FaceSnap(
      'Bureau Minimaliste',
      'Un espace de travail épuré avec une belle lumière naturelle.',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800',
      new Date(),
      156,
    );
    this.myOtherSnap.setLocation('à la montagne');
  }
}
