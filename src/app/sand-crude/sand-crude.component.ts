import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';

@Component({
  selector: 'app-sand-crude',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent,
  ],
  templateUrl: './sand-crude.component.html',
  styleUrl: './sand-crude.component.css',
})
export class SandCrudeComponent {
  vol_sand1: any = null;

  get sand_crude1() {
    let sand_crude1 = (this.vol_sand1 * 138.9).toFixed(2);
    return sand_crude1.toString() === 'NaN' ||
      sand_crude1.toString() === 'Infinity'
      ? '0'
      : sand_crude1;
  }

  vol_sand2: any = null;
  vol_sample: any = null;

  get sand_crude2() {
    let sand_crude2 = ((this.vol_sand2 * 526) / this.vol_sample).toFixed(2);
    return sand_crude2.toString() === 'NaN' ||
      sand_crude2.toString() === 'Infinity'
      ? '0'
      : sand_crude2;
  }
}
