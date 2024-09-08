import { Component } from '@angular/core';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { MatCardModule } from '@angular/material/card';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';
@Component({
  selector: 'app-sdi',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent,
  ],
  templateUrl: './sdi.component.html',
  styleUrl: './sdi.component.css'
})
export class SdiComponent {
  t0: number | null = null;
  tf: number | null = null;
  t_period: number | null = 15;

  get_sdi() {
    let sdi = this.t0 && this.tf && this.t_period ? (((1-this.t0/this.tf)*100)/this.t_period).toFixed(3):0;
    return sdi;
  }
}
