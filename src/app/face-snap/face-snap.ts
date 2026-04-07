import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createAt!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Salon Bohème';
    this.description =
      'Un coin lecture chaleureux avec des plantes, des coussins en velours et une lumière tamisée.';
    this.createAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800';
  }
}
