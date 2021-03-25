import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componets/inicio/inicio.component';
import { ResultadoComponent } from './componets/resultado/resultado.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
