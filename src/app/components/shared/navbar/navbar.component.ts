import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  paises: any [] = [];

//constructor (private http:HttpClient)
  constructor() {

/*console.log('Constructor del home hecho');
this.http.get('https://restcountries.es/rest/v2/lang/es')
.subscribe((respuesta:any) => //Lambda
{
  this.paises = respuesta;
  console.log(respuesta);
  
}
)*/



   }

  ngOnInit() {
  }

}
