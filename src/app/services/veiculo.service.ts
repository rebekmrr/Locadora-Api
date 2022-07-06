import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Veiculo} from "../model/Veiculo";

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  URL_VEICULO = 'http://localhost:3001/veiculos';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Veiculo[]>{
    return this.httpClient.get<Veiculo[]>(this.URL_VEICULO);
  }

  inserir(veiculo: Veiculo): Observable<Veiculo>{
    return this.httpClient.post<Veiculo>(this.URL_VEICULO, veiculo)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Veiculo>(`${this.URL_VEICULO}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Veiculo> {
    return this.httpClient.get<Veiculo>(`${this.URL_VEICULO}/${id}`)
  }

  atualizar(veiculo: Veiculo): Observable<Veiculo> {
    return this.httpClient.put<Veiculo>(`${this.URL_VEICULO}/${veiculo.id}`, veiculo);

  }
}

