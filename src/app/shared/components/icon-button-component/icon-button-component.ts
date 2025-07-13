import { Component, Input } from '@angular/core';

@Component({
    selector: 'ui-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './icon-button-component.html',
  styleUrl: './icon-button-component.css'
})
export class IconButtonComponent {
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' = 'button';
}
