import { Component, OnInit } from '@angular/core';
import {Portador} from "../../model/Portador";
import {PortadorService} from "../../services/portador.service";
import {Router} from "@angular/router";
import {Fatura} from "../../model/Fatura";

@Component({
  selector: 'app-portador',
  templateUrl: './portador.component.html',
  styleUrls: ['./portador.component.scss']
})
export class PortadorComponent implements OnInit {
  portador = Array<Portador>();
  // portador!: MatTableDataSource<Portador>;

  displayedColumns: string[] =
    ['nome', 'cpf', 'telefone', 'assistencia_id', "diaFaturamento", "opções"];


  constructor(private PortadorService: PortadorService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.PortadorService.listar().subscribe(
      p => this.portador = p
    )
    console.log(this.portador);
  }

  editar(cliente: Portador):void {

    this.roteador.navigate(['portador/cadastrar', cliente.idPortador])
  }

  remover(clientes: Portador) : void{

    this.PortadorService.remover(Number(clientes.idPortador)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.portador.findIndex(u => u.idPortador === clientes.idPortador)

        if (indexUsuarioParaRemover > -1) {

          this.portador.splice(indexUsuarioParaRemover, 1)


        }
        // this.mensagemService.success('Paciente removido com Sucesso!');
        this.ngOnInit()
      }
    )
  }


}







    // this.PortadorService.listar().subscribe(
    //   portador => this.portador = new MatTableDataSource<Portador>(portador) )
  //
  // }


  // filtrar(value: string) {
  //   this.portador.filter = value.trim().toLowerCase()
  //
  //
  // }


//   editar(portador: Portador[]):void {
//
//
//     // this.roteador.navigate(['portador/cadastrar/', portador.id])
//
//   }
//
//   remover(faturas: Portador) : void{
//
//     this.PortadorService.remover(Number(faturas.idPortador)).subscribe(
//       resposta => {
//         const indexUsuarioParaRemover = this.portador.findIndex(u => u.idPortador === faturas.idPortador)
//
//         if (indexUsuarioParaRemover > -1) {
//
//           this.portador.splice(indexUsuarioParaRemover, 1)
//
//
//         }
//         // this.mensagemService.success('Paciente removido com Sucesso!');
//         this.ngOnInit()
//       }
//     )
//   }
// }
//
