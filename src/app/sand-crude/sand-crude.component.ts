import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sand-crude',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './sand-crude.component.html',
  styleUrl: './sand-crude.component.css'
})
export class SandCrudeComponent {
  vol_sand1: any = null;

  get sand_crude1() {
    let sand_crude1 = (this.vol_sand1*138.9).toFixed(2);
    return sand_crude1.toString() === 'NaN' || sand_crude1.toString() === 'Infinity'
      ? '0'
      : sand_crude1;
  }

  vol_sand2: any = null;
  vol_sample: any = null;

  get sand_crude2() {
    let sand_crude2 = ((this.vol_sand2*526)/this.vol_sample).toFixed(2);
    return sand_crude2.toString() === 'NaN' || sand_crude2.toString() === 'Infinity'
      ? '0'
      : sand_crude2;
  }


  formatInput(value: any, vari: any) {
    if (vari == 'vol_sand1' && value.target.value != '') {
      this.vol_sand1 = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'vol_sand2' && value.target.value != '') {
      this.vol_sand2 = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'vol_sample' && value.target.value != '') {
      this.vol_sample = parseFloat(value.target.value).toFixed(5);
    } 
  }
}

