import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  resourceURL: string;

  constructor(private httpClient: HttpClient) {
    this.resourceURL = 'https://pav2.azurewebsites.net/api/empresas/';
  }

  get() {
    return this.httpClient.get(this.resourceURL);
  }

  getById(Id: number) {
    return this.httpClient.get(this.resourceURL + Id);
  }

  post(obj: Empresa) {
    return this.httpClient.post(this.resourceURL, obj);
  }

  put(Id: number, obj: Empresa) {
    return this.httpClient.put(this.resourceURL + Id, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.resourceURL + Id);
  }
}
