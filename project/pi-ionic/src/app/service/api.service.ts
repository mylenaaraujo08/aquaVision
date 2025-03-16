import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // ------- MÉTODOS DE USER -------
  createUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/user`, userData);
  }

  authUser(sessionData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/session`, sessionData);
  }

  // ------- MÉTODOS DE PONTO -------
  createPonto(pontoData: any, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    for (const key in pontoData) {
      if (pontoData.hasOwnProperty(key)) {
        formData.append(key, pontoData[key]);
      }
    }
    return this.http.post(`${this.apiURL}/create/ponto`, formData);
  }

  listPontos(): Observable<any> {
    return this.http.get(`${this.apiURL}/list/pontos`);
  }

  detailPonto(pontoId: string): Observable<any> {
    return this.http.get(`${this.apiURL}/detail/ponto`, { params: { id: pontoId } });
  }

  // ------- MÉTODOS DE MONITORAMENTO -------
  createMonitoramento(monitoramentoData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/monitoramento`, monitoramentoData);
  }

  // ------- MÉTODOS DE PARAMETRO -------
  createParametro(parametroData: any): Observable<any> {
    return this.http.post(`${this.apiURL}/parametro`, parametroData);
  }
}
