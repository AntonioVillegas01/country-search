import {Component, OnInit} from '@angular/core';
import {PaisService} from '../../services/pais.service';
import {Country} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: []
})
export class PorCapitalComponent {

  termino: string = '';
  paises: Country[] = [];
  hayError: boolean = false;

  constructor(private paisService: PaisService) {
  }


  buscar(argumento: string) {
    this.hayError = false;
    this.paisService.buscarPaisPorCapital(argumento)
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;

      }, (error => {
        this.hayError = true;
        this.paises = [];
        console.log(`Error: ${error}`);
      }));

  }

  sugerencias(termino: string) {
    this.hayError = false;

  }
}
