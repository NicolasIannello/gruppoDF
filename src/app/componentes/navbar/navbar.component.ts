import { CommonModule, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activa:string='inicio';

  constructor(private scroller: ViewportScroller){ }

  activar(tab:string){
    this.activa=tab;
    //this.router.navigate(['/'+tab]);
    this.scroller.setOffset([0, 150]);
    this.scroller.scrollToAnchor(tab);
  }
}
