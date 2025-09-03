import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
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
    RouterLink, CommonModule, MatCardModule, MatGridListModule, MatIconModule, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards: Card[] = [
    { title: 'TDS', description: 'Card 1', link: '/tds', icon: "science" },
    { title: 'TSS', description: 'Card 2', link: '/tss', icon: "science" },
    { title: 'API & SG', description: 'Card 3', link: '/api-sg', icon: "science" },
    { title: 'Particulare Contaminants', description: 'Card 4', link: '/pc', icon: "science" },
    { title: 'Sulfite', description: 'Card 5', link: '/sulfite', icon: "science" },
    { title: 'Bulk Chemicals', description: 'Card 6', link: '/bulk-chemicals', icon: "science" },
    { title: 'Sand in Crude', description: 'Card 7', link: '/sand-crude', icon: "science" },
    { title: 'Free Chlorine', description: 'Card 8', link: '/free-chlorine', icon: "science" },
    { title: 'SDI', description: 'Card 9', link: '/sdi', icon: "science" },
    { title: 'DEW Point', description: 'Card 10', link: '/dew-point', icon: "science" },
  ];
}
