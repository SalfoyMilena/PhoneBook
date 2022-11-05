import { Person } from 'src/app/models/person.model';

import { Component, Input, OnInit } from '@angular/core';
import { ServerResponse } from './../../models/server-response.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  @Input() users: Person[];

  openPopUp: Boolean = false;

  constructor(private getUserService: HttpService) { }

  ngOnInit(): void {
    const users = this.getUserService.getUsers();
    users.subscribe(res => {
      this.setUsers(res)
    })
  }
  setUsers(res: ServerResponse) {
    this.users = res.results
  }
  deleteUser(value: any) {
    this.users = this.users.filter(user => {
      return user.login.uuid != value
    })
  }
  CloseOpenPopUp(value?) {
    this.openPopUp = !this.openPopUp;
  }
  AddUserPopUp(value) {
    this.users.unshift(value);
  }

}
