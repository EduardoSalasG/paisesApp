import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor( private paisService: PaisService) {}

  termino: string = ''
  hayError: boolean = false;
  @Output() paises: Country[] = [];

  buscar( termino: string) {

    this.hayError = false;
    this.termino = termino

    this.paisService.buscarCapital( termino )
    .subscribe({ 
      next: (paises) =>{ 
      this.paises = paises;
    },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }  
    })
  }


}
