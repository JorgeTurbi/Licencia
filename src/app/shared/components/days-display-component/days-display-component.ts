import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
   selector: 'ui-days-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './days-display-component.html',
  styleUrl: './days-display-component.css'
})
export class DaysDisplayComponent {
  @Input() days: number | null = null;
}
