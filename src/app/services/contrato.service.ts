import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contrato} from "../model/Contrato";

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  URL_CONTRATO = 'http://localhost:3001/contratos';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Contrato[]>{
    return this.httpClient.get<Contrato[]>(this.URL_CONTRATO);
  }

  inserir(contrato: Contrato): Observable<Contrato>{
    return this.httpClient.post<Contrato>(this.URL_CONTRATO, contrato)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Contrato>(`${this.URL_CONTRATO}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Contrato> {
    return this.httpClient.get<Contrato>(`${this.URL_CONTRATO}/${id}`)
  }

  atualizar(contrato: Contrato): Observable<Contrato> {
    return this.httpClient.put<Contrato>(`${this.URL_CONTRATO}/${contrato.id}`, contrato);

  }


}
