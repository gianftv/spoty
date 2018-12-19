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
      'Authorization': 'Bearer BQDLMJhGMsJFRALYgAoH6QbFVqnyH8ByTFpDcwXWhhEJVLc5lwvwbGYxQBYigzf7OSxCWoYbiqVc0m6jv7U'
    });

      return this.http.get(url, {headers});

  }

  getNewReleases() {

    return  this.getQuery('browse/new-releases?limit=20')
    
   
      .pipe(map(data => data['albums'].items ));

  }

  getArtistas(termino: string) {//
   
    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
     
      .pipe(map(data =>data['artists'].items));
  }

  getArtista(id: string) {//termino si lo estoy esperando
   
    return this.getQuery(`artists/${ id }`);
     
      // .pipe(map(data =>data['artists'].items));

}
getTopTracks(id: string) {
   
  return this.getQuery(`artists/${ id }/top-tracks?country=us`)
   
     .pipe(map(data =>data['tracks']));

}
}