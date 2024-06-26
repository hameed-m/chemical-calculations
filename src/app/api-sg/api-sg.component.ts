import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalculatorHeaderComponent } from '../calculator-header/calculator-header.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { OutputFieldComponent } from '../output-field/output-field.component';

@Component({
  selector: 'app-api-sg',
  standalone: true,
  imports: [
    MatCardModule,
    CalculatorHeaderComponent,
    InputFieldComponent,
    OutputFieldComponent
  ],
  templateUrl: './api-sg.component.html',
  styleUrl: './api-sg.component.css'
})
export class ApiSgComponent {
  doc: any = null;
  dow: any = 0.99902;

  get sg() {
    let sg = (this.doc/this.dow).toFixed(5);
    return sg.toString()==='NaN' || sg.toString()==='Infinity' ? "0" : sg;
  }

  get api() {
    let api = ((141.5/parseFloat(this.sg))-131.5).toFixed(2);
    return api.toString()==='NaN' || api.toString()==='Infinity' ? 0 : api;
  }

}