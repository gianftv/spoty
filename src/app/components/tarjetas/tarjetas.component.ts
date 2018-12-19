import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  //en home pueden salir tanto albums o artistas. El id que hacemos es buscar artista por id no album
  verArtista(item: any) {

    let artistaId;

    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artist[0].id;

    }

 this.router.navigate(['/artist',artistaId ]);

  }

}
