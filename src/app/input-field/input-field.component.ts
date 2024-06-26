import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
})
export class InputFieldComponent {
  @Input() in!: number | string | null;
  @Output() inChange = new EventEmitter<number | string | null>();

  @Input() label: any = null;
  @Input() placeholder: any = null;

  formatInput(value: any) {
    if(value.target.value != '') {
      this.in = parseFloat(value.target.value).toFixed(5);
    }
  }

  updateInput(value: any) {
    this.inChange.emit(value.target.value);
  }
}
