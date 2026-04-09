import { Component } from '@angular/core';
import { FaceSnap } from '../models/snap.model';
import { OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,

  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Salon Bohème',
        'Un coin lecture chaleureux avec des plantes, des coussins en velours et une lumière tamisée.',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
        new Date(),
        10,
      ),
      new FaceSnap(
        'Coin Plantes',
        "Une jungle urbaine apaisante pour purifier l'air et égayer votre intérieur.",
        'https://images.unsplash.com/photo-1545239351-cefa43af60f3?w=800',
        new Date(),
        45,
      ),
      new FaceSnap(
        'Chambre Cocooning',
        'Une chambre douce et apaisante avec des tons neutres et une literie moelleuse.',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800',
        new Date(),
        78,
      ),
      new FaceSnap(
        'Bureau Minimaliste',
        'Un espace de travail épuré avec une belle lumière naturelle.',
        'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800',
        new Date(),
        156,
      ),
      new FaceSnap(
        'Cuisine Scandinave',
        'Une cuisine claire et fonctionnelle avec des touches de bois naturel.',
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800',
        new Date(),
        92,
      ),
      new FaceSnap(
        'Salle de Bain Zen',
        'Un espace de détente épuré avec des matériaux naturels et une ambiance spa.',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800',
        new Date(),
        34,
      ),
    ];
    this.faceSnaps[0].setLocation('Paris');
    this.faceSnaps[1].setLocation('Lyon');
    this.faceSnaps[2].setLocation('Bordeaux');
    this.faceSnaps[4].setLocation('Copenhagen');
  }
}
