import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';


@Component({
  selector: 'app-tss',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent
  ],
  templateUrl: './tss.component.html',
  styleUrl: './tss.component.css'
})
export class TssComponent {
  w1: any = null;
  w2: any = null;
  vol: any = null;

  get diff() {
    let diff = Math.abs(this.w1 - this.w2).toFixed(5);
    return diff.toString()==='NaN' || diff.toString()==='Infinity' ? "0" : diff;
  }

  get tss_ppm() {
    let tss_ppm = ((parseFloat(this.diff) * 1000000) / this.vol).toFixed(3);
    return tss_ppm.toString()==='NaN' || tss_ppm.toString()==='Infinity' ? "0" : tss_ppm;
  }
}
