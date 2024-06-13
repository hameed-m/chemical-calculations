import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-sulfite',
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
  templateUrl: './sulfite.component.html',
  styleUrl: './sulfite.component.css'
})
export class SulfiteComponent {
  vol_titrant: any = null;
  nor_ki: any = null;
  sample_vol: any = null;
  sulfure: any = null;

  get sulfite() {
    let sulfite = (this.vol_titrant * this.nor_ki * 40000) / this.sample_vol;
    return sulfite.toString() === 'NaN' || sulfite.toString() === 'Infinity'
      ? '0'
      : sulfite;
  }

  get sulfite_icp() {
    let sulfite_icp = (2.5*this.sulfure).toFixed(2);
    return sulfite_icp.toString() === 'NaN' || sulfite_icp.toString() === 'Infinity'
      ? '0'
      : sulfite_icp;
  }


  formatInput(value: any, vari: any) {
    if (vari == 'vol_titrant' && value.target.value != '') {
      this.vol_titrant = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'nor_ki' && value.target.value != '') {
      this.nor_ki = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'sample_vol' && value.target.value != '') {
      this.sample_vol = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'sample_vol' && value.target.value != '') {
      this.sample_vol = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'sulfure' && value.target.value != '') {
      this.sulfure = parseFloat(value.target.value).toFixed(2);
    }
  }
}
