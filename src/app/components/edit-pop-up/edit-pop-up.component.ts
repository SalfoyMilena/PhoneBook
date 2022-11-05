import { Person } from 'src/app/models/person.model';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-pop-up',
  templateUrl: './edit-pop-up.component.html',
  styleUrls: ['./edit-pop-up.component.scss']
})
export class EditPopUpComponent implements OnInit {
  @Input() user
  @Output() ClosePopUp: EventEmitter<Boolean> = new EventEmitter;
  @Output() AddUser: EventEmitter<Person> = new EventEmitter;
  newUser: Person;

  constructor() { }

  ngOnInit(): void {
    if (!this.user) {
      this.newUser = new Person();
    } else {
      this.newUser = this.user;
    }
  }

  submit(value) {
    let values = value.form.value
    if (!this.user) {
      // let newUser = new Person();
      this.newUser.name.title = values.title
      this.newUser.name.first = values.first
      this.newUser.name.last = values.last
      this.newUser.email = values.email
      this.newUser.location.street.name = values.street
      this.newUser.location.street.number = values['street-number']
      this.newUser.location.street.name = values['street-name']
      this.newUser.location.city = values.city
      this.newUser.location.country = values.country
      this.newUser.picture.medium = 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png';
      this.newUser.picture.large = 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png';
      this.newUser.picture.medium = 'https://cdn-icons-png.flaticon.com/512/1250/1250689.png';
      this.AddUser.emit(this.newUser);
      return
    }
    this.user.name.title = values.title
    this.user.name.first = values.first
    this.user.name.last = values.last
    this.user.email = values.email
    this.user.location.street.name = values.street
    this.user.location.street.number = values['street-number']
    this.user.location.street.name = values['street-name']
    this.user.location.city = values.city
    this.user.location.country = values.country
    this.onClose();
  }
  onClose() {
    this.ClosePopUp.emit(false);
  }
}
