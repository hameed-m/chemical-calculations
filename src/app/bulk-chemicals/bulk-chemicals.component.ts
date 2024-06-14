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
  selector: 'app-bulk-chemicals',
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
  ],  templateUrl: './bulk-chemicals.component.html',
  styleUrl: './bulk-chemicals.component.css'
})
export class BulkChemicalsComponent {
  vol_naoh: any = null;
  nor_naoh: any = null;
  weight_sample1: any = null;

  get acid_concentration() {
    let acid_concentration = (this.vol_naoh*this.nor_naoh*4.904)/this.weight_sample1;
    return acid_concentration.toString() === 'NaN' || acid_concentration.toString() === 'Infinity'
      ? '0'
      : acid_concentration;
  }

  vol_naso: any = null;
  nor_naso: any = null;
  weight_sample2: any = null;

  get ferric_chloride() {
    let ferric_chloride = ((this.vol_naso*this.nor_naso*16.22)/this.weight_sample2).toFixed(2);
    return ferric_chloride.toString() === 'NaN' || ferric_chloride.toString() === 'Infinity'
      ? '0'
      : ferric_chloride;
  }

  tit_vol: any = null;
  nor_naso2: any = null;
  sample_size: any = null;

  get sodium_hy_ppm() {
    let sodium_hy_ppm = ((this.tit_vol*this.nor_naso2*37220)/this.sample_size).toFixed(2);
    return sodium_hy_ppm.toString() === 'NaN' || sodium_hy_ppm.toString() === 'Infinity'
      ? '0'
      : sodium_hy_ppm;
  }

  get sodium_hy_perc() {
    let sodium_hy_perc = (parseFloat(this.sodium_hy_ppm)/10000).toFixed(2);
    return sodium_hy_perc.toString() === 'NaN' || sodium_hy_perc.toString() === 'Infinity'
      ? '0'
      : sodium_hy_perc;
  }


  formatInput(value: any, vari: any) {
    if (vari == 'vol_naoh' && value.target.value != '') {
      this.vol_naoh = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'nor_naoh' && value.target.value != '') {
      this.nor_naoh = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'weight_sample1' && value.target.value != '') {
      this.weight_sample1 = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'vol_naso' && value.target.value != '') {
      this.vol_naso = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'nor_naso' && value.target.value != '') {
      this.nor_naso = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'weight_sample2' && value.target.value != '') {
      this.weight_sample2 = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'tit_vol' && value.target.value != '') {
      this.tit_vol = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'nor_naso2' && value.target.value != '') {
      this.nor_naso2 = parseFloat(value.target.value).toFixed(5);
    } else if (vari == 'sample_size' && value.target.value != '') {
      this.sample_size = parseFloat(value.target.value).toFixed(5);
    }
  }
}
