import {Component, Input} from '@angular/core';
import {Country} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent {

  // recibes los props de tipo country[]
  @Input()
  paises: Country[] = [];

}

