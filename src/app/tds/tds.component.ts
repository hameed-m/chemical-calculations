import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tds',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, CommonModule, FormsModule],
  templateUrl: './tds.component.html',
  styleUrl: './tds.component.css',
})
export class TdsComponent {
  w1: any = null;
  w2: any = null;
  vol: any;

  get diff() {
    return Math.abs(this.w1 - this.w2);
  }

  get tds_ppm() {
    return (this.diff * 1000000) / this.vol;
  }

  get tds_percent() {
    return (this.tds_ppm) / 1000;
  }

}
