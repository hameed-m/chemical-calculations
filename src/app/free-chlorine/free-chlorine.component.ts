import { Component } from '@angular/core';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { MatCardModule } from '@angular/material/card';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';

@Component({
  selector: 'app-free-chlorine',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent,
  ],
  templateUrl: './free-chlorine.component.html',
  styleUrl: './free-chlorine.component.css',
})
export class FreeChlorineComponent {
  nor_tit: number | null = null;
  vol_tit: number | null = null;
  vol_sam: number | null = null;

  get_free_chlorine() {
    let free_chlorine = ((35.46 * this.nor_tit! * this.vol_tit!) / this.vol_sam!).toFixed(3);
    return free_chlorine;
  }
}
