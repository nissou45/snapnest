import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createAt!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'mon meilleur ami depuis toujours';
    this.createAt = new Date();
    this.snaps = 0;
  }
}
