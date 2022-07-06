import { Component, OnInit } from '@angular/core';
import {Contrato} from "../../model/Contrato";
import {Cliente} from "../../model/Cliente";
import {Veiculo} from "../../model/Veiculo";
import {ActivatedRoute, Router} from "@angular/router";
import {ClienteService} from "../../services/cliente.service";
import {ContratoService} from "../../services/contrato.service";
import {VeiculoService} from "../../services/veiculo.service";

@Component({
  selector: 'app-cadastrar-contrato',
  templateUrl: './cadastrar-contrato.component.html',
  styleUrls: ['./cadastrar-contrato.component.scss']
})
export class CadastrarContratoComponent implements OnInit {

  contrato: Contrato = new Contrato();
  conditionalOperator = Array<Cliente>();
  cliente = Array<Cliente>();
  veiculo = Array<Veiculo>();
  listaCliente: any
  listaVeiculo: any
  operacaoCadastro = true;


  constructor(private ClienteService: ClienteService, private rotaAtual: ActivatedRoute, private VeiculoService: VeiculoService,
              private ContratoService: ContratoService,
              private roteador: Router) {
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.ContratoService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.contrato = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
    this.listaCliente = this.ClienteService.listar().subscribe(
      p => this.cliente = p
    )
    this.listaVeiculo = this.VeiculoService.listar().subscribe(
      p => this.veiculo = p
    )
  }

  salvar(): void {
    if (this.contrato.id) {
      this.ContratoService.atualizar(this.contrato).subscribe(contrato => {
        this.roteador.navigate(['contrato']);

      })
    } else {

      this.ContratoService.inserir(this.contrato).subscribe(contrato => {
          this.roteador.navigate(['contrato']);
        },

      )

    }

  }
}

