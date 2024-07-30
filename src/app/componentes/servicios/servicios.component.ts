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
      img:"auto.png"},
    { text:"SUBASTAS Y LICITACIONES WEB",
      img:"web.png"},
    { text:"BAJAS CON RECUPERO DE PIEZAS",
      img:"rueda.PNG"}, 
    { text:"GESTION DE SCRAP",
      img:"scrap.jpg"}
  ]
}
