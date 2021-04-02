import {Component} from '@angular/core';
import {PaisService} from '../../services/pais.service';
import {Country} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  hayError: boolean = false;

  constructor(private paisService: PaisService) {
  }


  buscar(argumento: string): void {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = argumento;
    this.paisService.buscarPais(this.termino)
      .subscribe(
        (paises) => {
          console.log(paises);
          this.paises = paises;
        },
        (error) => {
          this.hayError = true;
          this.paises = [];
          console.log('Error');
          console.log(error);
        });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
      .subscribe(paises => {
        this.paisesSugeridos = paises.splice(0, 5);
      }, (error) => {
        this.paisesSugeridos = [];
      });


  }

  buscarSugerido(termino:string) {
    this.buscar(termino);

  }
}
