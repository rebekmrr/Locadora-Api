import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../services/cliente.service";
import {Cliente} from "../../model/Cliente";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
  cliente = Array<Cliente>();
  displayedColumns: string[]=
    ['nome', 'cnh', 'endereco', 'telefone', 'opções'];

  constructor(private ClienteService: ClienteService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.ClienteService.listar().subscribe(

      p => this.cliente = p

    )
    console.log(this.cliente);

  }

  editar(cliente: Cliente):void {

    this.roteador.navigate(['cliente/cadastrar', cliente.id])
  }

  remover(clientes: Cliente) : void{

    this.ClienteService.remover(Number(clientes.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.cliente.findIndex(u => u.id === clientes.id)

        if (indexUsuarioParaRemover > -1) {

          this.cliente.splice(indexUsuarioParaRemover, 1)


        }
        // this.mensagemService.success('Paciente removido com Sucesso!');
        this.ngOnInit()
      }
      )
  }
}
