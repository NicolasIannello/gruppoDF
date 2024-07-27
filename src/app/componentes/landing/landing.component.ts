import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgForOf, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  textoImagen:string='Gruppo DF'
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
