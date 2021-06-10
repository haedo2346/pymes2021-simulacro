import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class EmpresasService {
  resourceURL: string;

  constructor(private httpClient: HttpClient) {
    this.resourceURL = 'https://pav2.azurewebsites.net/api/empresas';
  }

  get() {
    return this.httpClient.get(this.resourceURL);
  }
}
