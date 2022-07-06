import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cliente} from "../model/Cliente";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  URL_PORTADOR = 'http://localhost:3001/clientes';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.URL_PORTADOR);
  }

  inserir(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this.URL_PORTADOR, cliente)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Cliente>(`${this.URL_PORTADOR}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.URL_PORTADOR}/${id}`)
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.URL_PORTADOR}/${cliente.id}`, cliente);

  }
}
