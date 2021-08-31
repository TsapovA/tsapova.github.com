import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pet} from "../api/pet";
import {QuickCustomerPetCreateRequest} from "../api/quick-customer-pet-create-request";

@Injectable({
  providedIn: 'root'
})
export class QuickService {

  basicUrl = 'http://localhost:8000/composite/quick/add';

  constructor(private http: HttpClient) {
  }

  save(createRequest: QuickCustomerPetCreateRequest) {
    console.log(createRequest)
    this.http.post<Pet>(this.basicUrl, {
      createRequest
    })
  }
}
