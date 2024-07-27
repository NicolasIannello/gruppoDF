import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activa:string='inicio';

  constructor(private router: Router){ }

  activar(tab:string){
    this.activa=tab;
    this.router.navigate(['/'+tab]);
  }
}
