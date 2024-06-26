import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';


@Component({
  selector: 'app-pc',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent
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
    let pc = (((parseFloat(this.diff_up) - parseFloat(this.diff_down))*1000000) / parseFloat(this.vol)).toFixed(2);
    return pc.toString() === 'NaN' || pc.toString() === 'Infinity' ? '0' : pc;
  }

}
