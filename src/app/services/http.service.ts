import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../models/person.model';
import { ServerResponse } from '../models/server-response.model';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }
  apiUrl: string = "https://randomuser.me/api/?results=10."

  getUsers() {
    return this.httpClient.get<ServerResponse>(this.apiUrl)
  }
}
