import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatCardModule,
    MatIconModule,
    BottomNavComponent,
    MatListModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chemical-calculations';

}
