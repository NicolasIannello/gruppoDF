import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  activa:string='inicio';
  @Input() widthC: number | undefined;
  @Input() cap: number | undefined;
  menuOpen:boolean=false;

  constructor(private scroller: ViewportScroller){ }

  activar(tab:string){
    this.activa=tab;
    //this.router.navigate(['/'+tab]);
    if(tab=='servicios') {
      this.scroller.setOffset([0, 100]);
    }else{
      this.scroller.setOffset([0, 25]);
    }
    this.scroller.scrollToAnchor(tab);
    this.menuOpen=false;
  }

  open(){
    this.menuOpen=!this.menuOpen;
  }
}
