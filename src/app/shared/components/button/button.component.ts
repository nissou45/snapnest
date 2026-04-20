import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [ngClass]="buttonType" (click)="onButtonClick()">
      {{ label }}
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class AppButtonComponent {
  @Input() label!: string;
  @Input() buttonType: 'global' | 'card' = 'global';
  @Output() clicked = new EventEmitter<void>();

  onButtonClick(): void {
    this.clicked.emit();
  }
}
