import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Portador} from "../model/Portador";

@Injectable({
  providedIn: 'root'
})
export class PortadorService {
  URL_PORTADOR = 'https://adesao-service-pdist.herokuapp.com/api/portadores';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Portador[]>{
    return this.httpClient.get<Portador[]>(this.URL_PORTADOR);
  }

  inserir(portador: Portador): Observable<Portador>{
    return this.httpClient.post<Portador>(this.URL_PORTADOR, portador)
  }


  remover(id: number): Observable<object> {
    return this.httpClient.delete<Portador>(`${this.URL_PORTADOR}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Portador> {
    return this.httpClient.get<Portador>(`${this.URL_PORTADOR}/${id}`)
  }

  atualizar(portador: Portador): Observable<Portador> {
    return this.httpClient.put<Portador>(`${this.URL_PORTADOR}/${portador.idPortador}`, portador);

  }
}
