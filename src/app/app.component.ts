import { Component } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list';
import { HeaderComponent } from './header/header';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FaceSnapListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
