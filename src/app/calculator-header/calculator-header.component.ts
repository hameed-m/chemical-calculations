import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-calculator-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './calculator-header.component.html',
  styleUrl: './calculator-header.component.css'
})
export class CalculatorHeaderComponent {
  @Input() title: string = '';
}
