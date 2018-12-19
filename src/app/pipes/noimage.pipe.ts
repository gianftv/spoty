//CREACIÓN DE NUESTRO PROPIO PIPE
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any, []): String {

   
    if (images.length > 0 ){//

      return images[0].url;
    }else{

      return 'assets/img/mia.png';
    }
    
  }

}
