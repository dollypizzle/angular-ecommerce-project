import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://e-papi-api.herokuapp.com/products';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getProduct(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  createProduct(data): Observable<any> {
    const userToken = localStorage.getItem('token');
    const Token = userToken.replace(/['"]+/g, '');

    return this.http.post(baseUrl, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    });
  }

  updateProduct(id, data): Observable<any> {
    const userToken = localStorage.getItem('token');
    const Token = userToken.replace(/['"]+/g, '');

    return this.http.patch(`${baseUrl}/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    });
  }

  deleteProduct(id): Observable<any> {
    const userToken = localStorage.getItem('token');
    const Token = userToken.replace(/['"]+/g, '');

    return this.http.delete(`${baseUrl}/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${Token}`,
      },
    });
  }
}
