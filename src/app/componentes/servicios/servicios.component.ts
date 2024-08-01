import { CommonModule, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  @Input() widthC: number | undefined;
  @Input() cap: number | undefined;
  
  cards:Array<any>=[
    { text:"COMPRA DE AUTOS SINIESTRADOS",
      img:"fa-car-burst"},
    { text:"SUBASTAS Y LICITACIONES WEB",
      img:"fa-globe"},
    { text:"BAJAS CON RECUPERO DE PIEZAS",
      img:"fa-screwdriver-wrench"}, 
    { text:"GESTION DE SCRAP",
      img:"fa-gear"}
  ]
}
