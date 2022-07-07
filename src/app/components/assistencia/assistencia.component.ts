import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Assistencia} from "../../model/Assistencia";
import {AssistenciaService} from "../../services/assistencia.service";

@Component({
  selector: 'app-assistencia',
  templateUrl: './assistencia.component.html',
  styleUrls: ['./assistencia.component.scss']
})
export class AssistenciaComponent implements OnInit {

  assistencia = Array<Assistencia>();
  displayedColumns: string[]=
    ['nome', 'valor','descricao','ativo'];

  constructor(private AssistenciaService: AssistenciaService, private roteador: Router) {

  }

  ngOnInit(): void {
    this.AssistenciaService.listar().subscribe(

      p => this.assistencia = p

    )
    console.log(this.assistencia);

  }

  editar(assistencia: Assistencia[]):void {


    this.roteador.navigate(['pacientes/cadastrar', assistencia])

  }

  remover(assistencia: Assistencia[]) {

  }
}
