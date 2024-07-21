import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { LowerCasePipe, TitleCasePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
@Component({
  selector: 'et-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [
    // ng
    RouterOutlet,
    RouterLink,
    // ng pipe
    TitleCasePipe,
    LowerCasePipe,
    // mat
    MatDivider,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class LayoutMainComponent {
  navigations = ['login', 'register', 'recipes'];
  authNav = ['login', 'register'];
  manageNav = ['recipes'];
  isOpen = true;
}