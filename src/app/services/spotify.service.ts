import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'// ya estaria proveido desde el principio 
})
export class SpotifyService {

  constructor(private http: HttpClient) {

    console.log('listo')
  }

  getNewRealeses() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAkldXReL5Pq9vnBi9HjNxo3WDktwf_XQyYIhbTo1XYCwIy8AxRCpRPDkmHR9-USSn_jESk24Jm50fXYak'
    });


    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
     
    
  }

  getArtista(termino: String){
    const headers =  new HttpHeaders({

      'Authorization': 'Bearer BQAkldXReL5Pq9vnBi9HjNxo3WDktwf_XQyYIhbTo1XYCwIy8AxRCpRPDkmHR9-USSn_jESk24Jm50fXYak'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artists&limit=15`, { headers });
  }
}
