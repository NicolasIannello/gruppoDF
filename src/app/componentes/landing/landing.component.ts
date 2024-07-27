import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  textoImagen:string="Gruppo DF"
  cards:Array<string>=[
    "COMPRA DE AUTOS SINIESTRADOS",
    "SUBASTAS Y LICITACIONES WEB",
    "BAJAS CON RECUPERO DE PIEZAS",
    "GESTION DE SCRAP"
  ]
}
