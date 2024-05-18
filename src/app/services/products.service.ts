import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FakeStoreApi, IProductResponse, Product } from '../common/helper';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  alert() {
    return 'Product Service ⚡️';
  }

  products() {
    return this._http.get<IProductResponse>(FakeStoreApi).pipe(
      map((resp) => {
        console.log(resp.products);
        return resp.products as Product[];
      })
    );
  }
}
