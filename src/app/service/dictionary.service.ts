import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Dictionary} from "../api/dictionary";
import {Observable} from "rxjs";
import {catBloodTypes} from "../donor/pet-constants";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private readonly baseUrl = "http://localhost:8000/vetgis/"
  private readonly basePetsUrl = 'pets/'

  constructor(private http: HttpClient) { }

  getPetTypes(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.baseUrl + this.basePetsUrl + 'types')
  }

  getCatBloodTypes(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.baseUrl + this.basePetsUrl + 'catBloodTypes')
  }

  getCities(): Observable<Dictionary[]> {
    return this.http.get<Dictionary[]>(this.baseUrl + 'cities')
  }
}
