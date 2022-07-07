import { Component, OnInit } from '@angular/core';
import {Portador} from "../../model/Portador";
import {ActivatedRoute, Router} from "@angular/router";
import {PortadorService} from "../../services/portador.service";

@Component({
  selector: 'app-cadastrar-portador',
  templateUrl: './cadastrar-portador.component.html',
  styleUrls: ['./cadastrar-portador.component.scss']
})
export class CadastrarPortadorComponent implements OnInit {
  portador: Portador = new Portador();
  operacaoCadastro = true;

  constructor(private  PortadorService: PortadorService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.portador = new Portador();
    if(this.rotaAtual.snapshot.paramMap.has('idPortador')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('idPortador'));
      this.PortadorService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.portador = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirPortador(): void {

    if (this.portador.idPortador) {
      this.PortadorService.atualizar(this.portador).subscribe(portador => {
        console.log(portador);
        this.roteador.navigate(['portador']);
      })

    } else {
      this.PortadorService.inserir(this.portador).subscribe(portador => {
        console.log(portador);
        this.roteador.navigate(['portador']);
      })
      this.portador = new Portador();

    }

  }
}
