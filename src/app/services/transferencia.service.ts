import { Transferencia } from './models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
  //
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    // inicializando o array de transferencia
    this.listaTransferencia = [];
  }
  get transferencias() {
    return this.listaTransferencia;
  }

  //Método para puxar todas as transferências
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  //Método para puxar todas as transferências
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    //const transferencia = { ...$event, data: new Date() };
    this.listaTransferencia.push(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(trasnferencia: any) {
    trasnferencia.data = new Date();
  }
}
