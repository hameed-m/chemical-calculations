import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-pc',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButton,
  ],
  templateUrl: './pc.component.html',
  styleUrl: './pc.component.css',
})
export class PcComponent {
  w1_up: any = null;
  w2_up: any = null;
  w1_down: any = null;
  w2_down: any = null;
  vol: any = null;

  get diff_up() {
    let diff_up = Math.abs(this.w2_up - this.w1_up).toFixed(5);
    return diff_up.toString() === 'NaN' || diff_up.toString() === 'Infinity'
      ? '0'
      : diff_up;
  }

  get diff_down() {
    let diff_down = Math.abs(this.w2_down - this.w1_down).toFixed(5);
    return diff_down.toString() === 'NaN' || diff_down.toString() === 'Infinity'
      ? '0'
      : diff_down;
  }

  get pc() {
    let pc = ((parseFloat(this.diff_up) - parseFloat(this.diff_down))*1000000) / parseFloat(this.vol);
    return pc.toString() === 'NaN' || pc.toString() === 'Infinity' ? 0 : pc;
  }

  formatInput(value: any, vari: any) {
    if (vari == 'w1_up' && value.target.value != '') {
      this.w1_up = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'w2_up' && value.target.value != '') {
      this.w2_up = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'w1_up' && value.target.value != '') {
      this.w1_down = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'w2_down' && value.target.value != '') {
      this.w2_down = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'vol' && value.target.value != '') {
      this.vol = parseFloat(value.target.value).toFixed(1);
    }
  }
}
