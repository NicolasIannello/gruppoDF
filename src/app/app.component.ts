import { afterNextRender, Component, HostListener, inject, Injector, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { LandingComponent } from "./componentes/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  injector = inject(Injector);
  title = 'gruppodf';
  width:number | undefined;
  cap:number = 700;

  ngOnInit() {
    afterNextRender(() => this.width=window.innerWidth, {injector: this.injector});
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.width=window.innerWidth;
    console.log(this.width);
  }
}
