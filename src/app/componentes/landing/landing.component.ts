import { Component, Input } from '@angular/core';
import { InicioComponent } from "../inicio/inicio.component";
import { ServiciosComponent } from "../servicios/servicios.component";
import { NosotrosComponent } from "../nosotros/nosotros.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [InicioComponent, ServiciosComponent, NosotrosComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  @Input() widthC: number | undefined;
  @Input() cap: number | undefined;
}
