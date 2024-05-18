import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FakeStoreApi } from '../common/helper';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  alert() {
    return 'Product Service ⚡️';
  }

  products() {
    return this._http.get(FakeStoreApi);
  }
}
