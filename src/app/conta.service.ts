import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Conta } from "./conta";

@Injectable()
export class ContaService {
  private apiUrl = "http://localhost:8082/api/v1/conta";

  constructor(private http: HttpClient) { }

  getListaContas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getConta(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deletaConta(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: "text" });
  }

  cadastrarConta(conta: Conta): Observable<any> {
    return this.http.post(`${this.apiUrl}`, conta);
  }

  sacarConta(id: number, valor: any): Observable<any> {
    const body = {};
    body["valor"] = valor;

    return this.http.put(`${this.apiUrl}/${id}/false`, body);
  }

  depositarConta(id: number, valor: any): Observable<any> {
    const body = {};
    body["valor"] = valor;

    return this.http.put(`${this.apiUrl}/${id}/true`, body);
  }
}
