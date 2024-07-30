import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  maps:string="https://www.google.com/maps/place/Triunvirato+2219,+B1611CHS+Don+Torcuato,+Provincia+de+Buenos+Aires/@-34.4956987,-58.6107253,15.75z/data=!4m5!3m4!1s0x95bcbb2532621b1d:0x3c6879dafb4b2ebe!8m2!3d-34.4951766!4d-58.6116785?entry=ttu";
  number:string="+5491127605336";

  constructor(private router: Router){ }

  mapsG(){
    window.open(this.maps);
  }
  wspW(){
    window.open('https://wa.me/'+this.number);
  }
}
