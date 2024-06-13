import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tds',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './tds.component.html',
  styleUrl: './tds.component.css',
})
export class TdsComponent {
  w1: any = null;
  w2: any = null;
  vol: any = null;
  VirtualKeyboardPolicy: any;

  get diff() {
    let diff = Math.abs(this.w1 - this.w2).toFixed(5);
    return diff.toString()==='NaN' || diff.toString()==='Infinity' ? "0" : diff;
  }

  get tds_ppm() {
    let tds_ppm = parseFloat(((parseFloat(this.diff) * 1000000) / this.vol).toFixed(3));
    return tds_ppm.toString()==='NaN' || tds_ppm.toString()==='Infinity' ? 0 : tds_ppm;
  }

  get tds_percent() {
    let tds_percent = parseFloat((this.tds_ppm / 1000).toFixed(2));
    return tds_percent.toString()==='NaN' || tds_percent.toString()==='Infinity' ? 0 : tds_percent;
  }

  formatInput(value: any, vari: any) {
    if(vari == 'w1' && value.target.value != '') {
      this.w1 = parseFloat(value.target.value).toFixed(5);
    } else if(vari == 'w2' && value.target.value != '') {
      this.w2 = parseFloat(value.target.value).toFixed(5);
    }
  }

}
