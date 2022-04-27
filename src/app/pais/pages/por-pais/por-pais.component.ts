import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises : Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    //! Versión de subscribe actualizada
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) => {
        this.paises = paises;
      },
      error: (e) => {
        this.hayError = true;
        this.paises = [];
      }
    })

    //! Versioon de subscribe deprecada 
    // this.paisService.buscarPais(this.termino).subscribe( (paises) => {
    //   console.log(paises);
    //   this.paises = paises;
    // }, (err) => {
    //   this.hayError = true;
    //   this.paises = [];
    // });
  }

  sugerencias(termino : string){
    this.hayError = false;
    //TODO: crear sugerencias
  }


}
