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
      img:"fa-car-burst",
      desc:"Gestión de cotizaciones y compras de vehículos siniestrados en todo el país para las mejores compañías de seguros."
    },
    { text:"SUBASTAS Y LICITACIONES WEB",
      img:"fa-globe",
      desc:"Servicio exclusivo para clientes vendedores Aseguradoras y/o Empresas con flota propia. Gestión de ventas de vehículos mediante licitaciones o subastas Web."
    },
    { text:"BAJAS CON RECUPERO DE PIEZAS",
      img:"fa-screwdriver-wrench",
      desc:"Servicio exclusivo para compañías de Seguros. Nos encargamos del tratamiento y la gestión completa de sus vehículos con Destrucción Total para recupero de Piezas según Ley 25.761."
    }, 
    { text:"GESTION DE SCRAP",
      img:"fa-gear",
      desc:"Exclusivo para compañías de Seguros. Retiramos y gestionamos el Scrap de las bajas totales."
    }
  ]
}
