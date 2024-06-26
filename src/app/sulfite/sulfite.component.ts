import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';


@Component({
  selector: 'app-sulfite',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent
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
    let sulfite = ((this.vol_titrant * this.nor_ki * 40000) / this.sample_vol).toFixed(2);
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

}
