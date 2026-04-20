import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="app-card" [class.snapped]="isSnapped">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class AppCardComponent {
  @Input() isSnapped: boolean = false;
}
