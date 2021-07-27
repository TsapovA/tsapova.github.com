import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../api/customer";
import { CustomerCreateRequest } from "../api/customer-create-request";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  basicUrl = 'http://localhost:8000/customers/quick';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Customer[]>(this.basicUrl, {headers: {
        "Accept": "application/json"
      }})
  }

  save(createRequest: CustomerCreateRequest) {
    this.http.post<Customer>(this.basicUrl, {
      createRequest
    })
  }
}
