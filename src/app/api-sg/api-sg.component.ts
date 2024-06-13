import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-api-sg',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButton,
    RouterLink
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



  formatInput(value: any, vari: any) {
    if(vari == 'doc' && value.target.value != '') {
      this.doc = parseFloat(value.target.value).toFixed(5);
    }
  }

}