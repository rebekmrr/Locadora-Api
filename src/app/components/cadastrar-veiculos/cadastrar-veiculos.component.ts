import { Component, OnInit } from '@angular/core';
import {Veiculo} from "../../model/Veiculo";
import {ActivatedRoute, Router} from "@angular/router";
import {VeiculoService} from "../../services/veiculo.service";
import {Cliente} from "../../model/Cliente";

@Component({
  selector: 'app-cadastrar-veiculos',
  templateUrl: './cadastrar-veiculos.component.html',
  styleUrls: ['./cadastrar-veiculos.component.scss']
})
export class CadastrarVeiculosComponent implements OnInit {
  veiculo: Veiculo = new Veiculo();
  operacaoCadastro = true;

  constructor(private  VeiculoService: VeiculoService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.veiculo = new Veiculo();
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.VeiculoService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.veiculo = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirCliente(): void {

    if (this.veiculo.id) {
      this.VeiculoService.atualizar(this.veiculo).subscribe(veiculo => {
        console.log(veiculo);
        this.roteador.navigate(['veiculo']);
      })

    } else {
      this.VeiculoService.inserir(this.veiculo).subscribe(veiculo => {
        console.log(veiculo);
        this.roteador.navigate(['veiculo']);
      })
      this.veiculo = new Veiculo();

    }

  }
}
