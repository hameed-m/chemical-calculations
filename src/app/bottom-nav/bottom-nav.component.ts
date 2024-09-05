import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
import { MatTabsModule, MatTabChangeEvent } from '@angular/material/tabs';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink, MatIconModule, MatTabsModule, HomeComponent],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css',
})
export class BottomNavComponent {
  selectedIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    const selectedTab = localStorage.getItem('selectedTab');
    if (selectedTab) {
      this.selectedIndex = parseInt(selectedTab);
    }

  }

  onTabChange(event: MatTabChangeEvent) {
    localStorage.setItem('selectedTab', event.index.toString());

    if (event.index === 0) {
      this.router.navigate(['/']);
    } else if (event.index === 1) {
      this.router.navigate(['/report']);
    }
  }
}
