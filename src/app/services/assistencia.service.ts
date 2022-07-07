import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Assistencia} from "../model/Assistencia";

@Injectable({
  providedIn: 'root'
})
export class AssistenciaService {
  URL_ASSISTENCIA = 'https://adesao-service-pdist.herokuapp.com/api/assistencias';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Assistencia[]>{
    return this.httpClient.get<Assistencia[]>(this.URL_ASSISTENCIA);
  }

  inserir(assistencia: Assistencia): Observable<Assistencia>{
    return this.httpClient.post<Assistencia>(this.URL_ASSISTENCIA, assistencia)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Assistencia>(`${this.URL_ASSISTENCIA}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Assistencia> {
    return this.httpClient.get<Assistencia>(`${this.URL_ASSISTENCIA}/${id}`)
  }

  atualizar(assistencia: Assistencia): Observable<Assistencia> {
    return this.httpClient.put<Assistencia>(`${this.URL_ASSISTENCIA}/${assistencia.id}`, assistencia);

  }
}
