import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';


@Component({
  selector: 'app-tds',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent
  ],
  templateUrl: './tds.component.html',
  styleUrl: './tds.component.css',
})
export class TdsComponent {
  
  w1: any = null;
  w2: any = null;
  vol: any = null;


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
    return tds_percent.toString()==='NaN' || tds_percent.toString()==='Infinity' ? "0" : tds_percent;
  }

  validateWeights() {
    if(this.w1 !== null && this.w2 !== null && this.w1 !== '' && this.w2 !== '') {
      return this.w1 > this.w2;
    } else {
      return false;
    }
  }

}
