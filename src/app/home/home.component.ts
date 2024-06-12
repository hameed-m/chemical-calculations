import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface Card {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
  cards: Card[] = [
    { title: 'TDS', description: 'Card 1', link: '/tds' },
    { title: 'TSS', description: 'Card 2', link: '/tss' },
    { title: 'API & SG', description: 'Card 3', link: '/api-sg' },
    { title: 'Particulare Contaminants', description: '', link: '/pc' },
    { title: 'Sulfite', description: 'Card 2', link: '/sulfite' },
    { title: 'Bulk Chemicals', description: 'Card 3', link: '/bulk-chemicals' },
    { title: 'Sand in Crude', description: 'Card 3', link: '/sand-crude' },
    // { title: 'Geochemicals', description: 'Card 3', link: '/geochemicals' },
    // { title: 'Sand in Crude', description: 'Card 3', link: 'card-3' },

  ];
}
