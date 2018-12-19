import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component'
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
//import { SpotifyService } from './services/spotify.service';

@NgModule({//todos los componentes que creemos se registran aquí
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe
  ], 
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash:true}),
    HttpClientModule
  ],
  providers: [],//SpotifyService. Se detallan los components del servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
