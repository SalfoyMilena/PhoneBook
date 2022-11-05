import { Person } from './../../models/person.model';
import { ServerResponse } from './../../models/server-response.model';
import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-book-page',
  templateUrl: './phone-book-page.component.html',
  styleUrls: ['./phone-book-page.component.scss']
})
export class PhoneBookPageComponent implements OnInit {

  openPopUp:Boolean= false;

  constructor(private getUserService: HttpService) {
  }

  ngOnInit(): void {
    // const users = this.getUserService.getUsers();
    // users.subscribe(res=>{
    //   this.setUsers(res)
    // })
  }
  addUser(){
    this.openPopUp = true;
  }

}
