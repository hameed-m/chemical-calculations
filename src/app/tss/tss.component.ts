import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-tss',
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
  templateUrl: './tss.component.html',
  styleUrl: './tss.component.css'
})
export class TssComponent {
  w1: any = null;
  w2: any = null;
  vol: any = 0;

  get diff() {
    let diff = Math.abs(this.w1 - this.w2).toFixed(5);
    return diff.toString()==='NaN' || diff.toString()==='Infinity' ? "0" : diff;
  }

  get tss_ppm() {
    let tss_ppm = parseFloat(((parseFloat(this.diff) * 1000000) / this.vol).toFixed(3));
    return tss_ppm.toString()==='NaN' || tss_ppm.toString()==='Infinity' ? 0 : tss_ppm;
  }



  formatInput(value: any, vari: any) {
    if(vari == 'w1' && value.target.value != '') {
      this.w1 = parseFloat(value.target.value).toFixed(5);
    } else if(vari == 'w2' && value.target.value != '') {
      this.w2 = parseFloat(value.target.value).toFixed(5);
    }
  }

}
