
import{Routes,RouterModule} from '@angular/router';
import { SearchComponent} from './components/search/search.component';
import { HomeComponent} from './components/home/home.component';




export const ROUTES: Routes = [ 
    //componentes que van a ser enlazados, es decir entutar a otro sitio
    //Artista y shared 
    {path: 'home', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: '', pathMatch: 'full', redirectTo:'home'},
    {path: '""', pathMatch: 'full', redirectTo:'home'},
]