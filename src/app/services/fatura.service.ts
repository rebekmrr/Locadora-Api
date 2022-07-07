import { Injectable } from '@angular/core';
import {Fatura} from "../model/Fatura";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FaturaService {

  URL_Fatura = 'https://cobranca-service-pdist.herokuapp.com/cobranca/api/faturas';

  constructor(private  httpClient: HttpClient) {

  }

  listar(): Observable<Fatura[]>{
    // listar(diaFaturamento: number): Observable<Fatura> {
    //   return this.httpClient.get<Fatura>(`${this.URL_Fatura}/${diaFaturamento}`)

    return this.httpClient.get<Fatura[]>(this.URL_Fatura);
  }

  inserir(fatura: Fatura): Observable<Fatura>{
    return this.httpClient.post<Fatura>(this.URL_Fatura, fatura)
  }

  remover(id: number): Observable<object> {
    return this.httpClient.delete<Fatura>(`${this.URL_Fatura}/${id}`);
  }

  pesquisarPorId(diaFaturamento: number): Observable<Fatura> {
    return this.httpClient.get<Fatura>(`${this.URL_Fatura}/${diaFaturamento}`)
  }

  atualizar(fatura: Fatura): Observable<Fatura> {
    return this.httpClient.put<Fatura>(`${this.URL_Fatura}/${fatura.status}`, fatura);

  }
}
