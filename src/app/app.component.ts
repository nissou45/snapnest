import { Component } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
