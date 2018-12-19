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
      'Authorization': 'Bearer BQAY5Q8vLLSxHmitOhgJLFS3y2q07t5V6AZL31YK_cF07LkLHxZMVtTnsrFJ4hMbl_th5LpV8ViLb7U1yFA'
    });

      return this.http.get(url, {headers});

  }

  getNewRealeses() {

    return  this.getQuery('browse/new-releases?limit=20')
    
   
      .pipe(map(data => data['albums'].items ));

  }

  getArtista(termino: String) {//termino si lo estoy esperando
   
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
     
      .pipe(map(data =>data['artists'].items));
  }
}
