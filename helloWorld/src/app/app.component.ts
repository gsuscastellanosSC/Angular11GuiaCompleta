import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Jesus'
  textPlaceholder = 'Escriba algo aquí'
  desabilitado = true
  imgSrc='data:image/png;base64,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'
  texto = 'Esto es un video sobre Event Binding'

  constructor(){
    setInterval(()=>this.name = 'Sc', 3000);
    setInterval(()=>this.desabilitado = false, 3000);
  }

  getSuma(n1 : number, n2: number){
    return n1+n2;
  }

  cambiarTexto(): void{
    alert('En el proximo vamos a ver Two way data-binding');
  }

  texto2 = ''

  listEstudiantes: any[] = [
    {nombre : 'sc1', estado: 'Exelente'},
    {nombre : 'sc2', estado: 'Exelente'},
    {nombre : 'sc3', estado: 'Exelente'}
  ]

  mostrar = true;
  toogle(): void{
    this.mostrar = !this.mostrar
  }
}
