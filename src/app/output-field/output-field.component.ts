import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-output-field',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './output-field.component.html',
  styleUrl: './output-field.component.css'
})
export class OutputFieldComponent {
  @Input() out!: number | string;
  @Input() label!: string;
}
