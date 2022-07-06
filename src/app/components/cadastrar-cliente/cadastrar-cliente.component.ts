import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../model/Cliente";
import {ClienteService} from "../../services/cliente.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {
  cliente: Cliente = new Cliente();
  operacaoCadastro = true;

  constructor(private  ClienteService: ClienteService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.cliente = new Cliente();
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.ClienteService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.cliente = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirCliente(): void {

    if (this.cliente.id) {
      this.ClienteService.atualizar(this.cliente).subscribe(cliente => {
        console.log(cliente);
        this.roteador.navigate(['cliente']);
      })

    } else {
      this.ClienteService.inserir(this.cliente).subscribe(cliente => {
        console.log(cliente);
        this.roteador.navigate(['cliente']);
      })
      this.cliente = new Cliente();

    }

  }
}
