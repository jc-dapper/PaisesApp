import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  //paises : Country[] = [];
  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

    /*
      La funcion devuelve un arreglo, por lo tanto existen dos opciones para arreglar el problema que tiene el curso. La primera es recibir el primer elemento del arreglo y asignarlo a la variable pais (opcion 1). Y la segunda que es crear un array de paises y guardar todo el arreglo recibido en la respuesta dentro de nuestro array creado para después iterarlo en el html utilizando un ng-for.
    */

    //Opcion 2
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.getPaisPorAlpha(id)),
      tap(console.log)
    )
    .subscribe( pais => this.pais = pais[0]);


    //Opcion 1
    // this.activatedRoute.params
    // .pipe(
    //   switchMap( ({id}) => this.paisService.getPaisPorAlpha(id)),
    //   tap(console.log)
    // )
    // .subscribe( paises => this.paises = paises);

  }

}
