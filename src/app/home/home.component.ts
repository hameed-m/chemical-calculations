import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface Card {
  title: string;
  description: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, CommonModule, MatCardModule, MatGridListModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards: Card[] = [
    { title: 'TDS', description: 'Card 1', link: '/tds', icon: "water" },
    { title: 'TSS', description: 'Card 2', link: '/tss', icon: "water" },
    { title: 'API & SG', description: 'Card 3', link: '/api-sg', icon: "water" },
    { title: 'Particulare Contaminants', description: '', link: '/pc', icon: "water" },
    { title: 'Sulfite', description: 'Card 2', link: '/sulfite', icon: "water" },
    { title: 'Bulk Chemicals', description: 'Card 3', link: '/bulk-chemicals', icon: "water" },
    { title: 'Sand in Crude', description: 'Card 3', link: '/sand-crude', icon: "water" },
    // { title: 'Geochemicals', description: 'Card 3', link: '/geochemicals' },
    // { title: 'Sand in Crude', description: 'Card 3', link: 'card-3' },
  ];
}
