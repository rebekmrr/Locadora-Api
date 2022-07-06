import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClienteComponent} from "./components/cliente/cliente.component";
import {CadastrarClienteComponent} from "./components/cadastrar-cliente/cadastrar-cliente.component";
import {VeiculosComponent} from "./components/veiculos/veiculos.component";
import {CadastrarVeiculosComponent} from "./components/cadastrar-veiculos/cadastrar-veiculos.component";
import {ContratoComponent} from "./components/contrato/contrato.component";
import {CadastrarContratoComponent} from "./components/cadastrar-contrato/cadastrar-contrato.component";
import {HomeComponent} from "./components/home/home.component";
// import {PortadorComponent} from "./components/portador/portador.component";
// import {CadastrarPortadorComponent} from "./components/cadastrar-portador/cadastrar-portador.component";
// import {HomeComponent} from "./components/home/home.component";
// import {AssistenciaComponent} from "./components/assistencia/assistencia.component";

const routes: Routes = [

  // {path: 'portador', component: PortadorComponent},
  // {path: 'cadastrarPortador', component: CadastrarPortadorComponent},
  // {path: 'home', component: HomeComponent},
  // {path: 'assistencia', component: AssistenciaComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'cadastrarCliente', component: CadastrarClienteComponent},
  {path: 'cliente/cadastrar/:id', component: CadastrarClienteComponent },
  {path: 'veiculo', component: VeiculosComponent},
  {path: 'cadastrarVeiculo', component: CadastrarVeiculosComponent},
  {path: 'veiculo/cadastrar/:id', component: CadastrarVeiculosComponent },
  {path: 'cadastrarContrato', component: CadastrarContratoComponent},
  {path: 'contrato', component: ContratoComponent},
  {path: 'contrato/cadastrar/:id', component: CadastrarContratoComponent },
  {path: 'contrato/:id', component: CadastrarContratoComponent },
  {path: 'home', component: HomeComponent },











];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
