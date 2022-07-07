import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PortadorComponent} from "./components/portador/portador.component";
import {CadastrarPortadorComponent} from "./components/cadastrar-portador/cadastrar-portador.component";
import {HomeComponent} from "./components/home/home.component";
import {AssistenciaComponent} from "./components/assistencia/assistencia.component";
import {FaturaComponent} from "./components/fatura/fatura.component";

const routes: Routes = [

  {path: 'portador', component: PortadorComponent},
  {path: 'cadastrarPortador', component: CadastrarPortadorComponent},
  {path: 'home', component: HomeComponent},
  {path: 'assistencia', component: AssistenciaComponent},
  {path: 'fatura', component: FaturaComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
