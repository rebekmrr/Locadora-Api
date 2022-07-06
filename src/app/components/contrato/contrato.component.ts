import { Component, OnInit } from '@angular/core';
import {Contrato} from "../../model/Contrato";
import {Cliente} from "../../model/Cliente";
import {Veiculo} from "../../model/Veiculo";
import {ContratoService} from "../../services/contrato.service";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {
  contrato = Array<Contrato>();


  // contrato = Array<Contrato>();
  displayedColumns: string[]=
    ["idContrato", "dataInicio", "dataFim", "valor", "devolução", "juros", "valorTotal", "opções"]
  cont: Contrato = new Contrato();
  operacaoCadastro = true;

  constructor(private ContratoService: ContratoService, private roteador: Router, private rotaAtual: ActivatedRoute) {
    this.cont = new Contrato();
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.ContratoService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.cont = usuarioRetornado )}
  }

  ngOnInit(): void {
    this.ContratoService.listar().subscribe(

      p => this.contrato = p

    )
    console.log(this.contrato);

  }


  editar(contratos: Contrato) {
    this.roteador.navigate(['contrato/cadastrar', contratos.id])

  }


  remover(contratos: Contrato) : void{

    this.ContratoService.remover(Number(contratos.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.contrato.findIndex(
          u => u.id === contratos.id)

        if (indexUsuarioParaRemover > -1) {

          this.contrato.splice(indexUsuarioParaRemover, 1)


        }
        // this.mensagemService.success('Paciente removido com Sucesso!');
        this.ngOnInit()
      }
    )
  }


}
