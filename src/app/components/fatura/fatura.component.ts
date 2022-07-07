import { Component, OnInit } from '@angular/core';
import {FaturaService} from "../../services/fatura.service";
import {Router} from "@angular/router";
import {Fatura} from "../../model/Fatura";

@Component({
  selector: 'app-fatura',
  templateUrl: './fatura.component.html',
  styleUrls: ['./fatura.component.scss']
})
export class FaturaComponent implements OnInit {
  fatura = Array<Fatura>();
  displayedColumns: string[]=
    ['nome', 'valorAssistencia', 'status', 'codigoFatura', 'dataVenciamento'];

  constructor(private FaturaService: FaturaService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.FaturaService.listar().subscribe(

      p => this.fatura= p

    )
    console.log(this.fatura);

  }

  editar(fatura: Fatura):void {

    // this.roteador.navigate(['editar/cadastrar', fatura.idFatura])
  }

  remover(faturas: Fatura) : void {

    //   this.FaturaService.remover(Number(faturas.idFatura)).subscribe(
    //     resposta => {
    //       const indexUsuarioParaRemover = this.fatura.findIndex(u => u.idFatura === faturas.idFatura)
    //
    //       if (indexUsuarioParaRemover > -1) {
    //
    //         this.fatura.splice(indexUsuarioParaRemover, 1)
    //
    //
    //       }
    //       // this.mensagemService.success('Paciente removido com Sucesso!');
    //       this.ngOnInit()
    //     }
    //   )
    // }
  }
}
