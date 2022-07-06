import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../model/Cliente";
import {Veiculo} from "../../model/Veiculo";
import {Router} from "@angular/router";
import {VeiculoService} from "../../services/veiculo.service";

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {
  veiculo = Array<Veiculo>();
  displayedColumns: string[]=
    ["fabricante", "modelo", "ano", "motor", "placa", "diaria", 'opções'];

  constructor(private VeiculoService: VeiculoService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.VeiculoService.listar().subscribe(

      p => this.veiculo = p

    )
    console.log(this.veiculo);

  }

  editar(veiculo: Veiculo):void {

    this.roteador.navigate(['veiculo/cadastrar', veiculo.id])

  }

  remover(veiculos: Veiculo) : void{

    this.VeiculoService.remover(Number(veiculos.id)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.veiculo.findIndex(u => u.id === veiculos.id)

        if (indexUsuarioParaRemover > -1) {

          this.veiculo.splice(indexUsuarioParaRemover, 1)


        }
        // this.mensagemService.success('Paciente removido com Sucesso!');
        this.ngOnInit()
      }
    )
  }
}

