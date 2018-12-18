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
      'Authorization': 'Bearer BQDZqtQV2t1iGV16dvLjocbbVp09FDv8DwjJthq6IqXsvN3jI1ZNQblM6di1ZpXXDhWAY1H3H3oxRuewf80'
    });

      return this.http.get(url, {headers});

  }

  getNewRealeses() {

    return  this.getQuery('browse/new-releases?limit=20')
    
   
      .pipe(map(data => data['albums'].items ));

  }

  getArtista(termino: String) {
   
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
     
      .pipe(map(data =>data['artists'].items));
  }
}
