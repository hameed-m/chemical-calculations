import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';


@Component({
  selector: 'app-bulk-chemicals',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent
  ],  templateUrl: './bulk-chemicals.component.html',
  styleUrl: './bulk-chemicals.component.css'
})
export class BulkChemicalsComponent {
  vol_naoh: any = null;
  nor_naoh: any = null;
  weight_sample1: any = null;

  get acid_concentration() {
    let acid_concentration = ((this.vol_naoh*this.nor_naoh*4.904)/this.weight_sample1).toFixed(2);
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
}
