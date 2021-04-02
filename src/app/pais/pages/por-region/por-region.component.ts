import {Component} from '@angular/core';
import {Country} from '../../interfaces/pais.interface';
import {PaisService} from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  hayError: boolean = false;
  termino: string = '';

  constructor(private paisService: PaisService) {
  }

  getClaseCSS(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string): void {
    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.hayError = false;
    this.termino = region;
    this.paisService.buscarPorRegion(this.termino)
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
        }
      );
  }



}
