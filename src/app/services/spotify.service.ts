import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'// ya estaria proveido desde el principio 
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log('listo')
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBlVU3i1_lzyqkni48Cgo8P_1fRX8OVcIBB-dzYmxBpZ-oW4v-8Za3M9UxYBu70HJ7oG5CKggb4qssXfKg'
    });

      return this.http.get(url, {headers});

  }

  getNewRealeses() {

    return  this.getQuery('browse/new-releases?limit=20')
    
   
      .pipe(map(data => data['albums'].items ));

  }

  getArtistas(termino: String) {//
   
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
     
      .pipe(map(data =>data['artists'].items));
  }

  getArtista(id: String) {//termino si lo estoy esperando
   
    return this.getQuery(`artist/${ id }`);
     
      // .pipe(map(data =>data['artists'].items));

}
getTopTracks(id: String) {
   
  return this.getQuery(`artist/${ id }/top-tracks/country=us`)
   
     .pipe(map(data =>data['tracks'].items));

}
}