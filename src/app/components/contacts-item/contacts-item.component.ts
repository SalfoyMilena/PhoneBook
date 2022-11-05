import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/models/person.model';


@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})

export class ContactsItemComponent implements OnInit {

  @Input() user: Person;
  @Output() DeleteUserUuid:EventEmitter<string> = new EventEmitter<string>();

  openEditPopUp: boolean = false;

  openDeletePopUp: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(type) {
    switch (type) {
      case "edit":
        this.openEditPopUp = !this.openEditPopUp;
        break;
      case "delete":
        this.openDeletePopUp = !this.openDeletePopUp;
        break;
    }
  }
  ClosePopUp(value:any){
    this.openEditPopUp = false;
    this.openDeletePopUp = false;
  }
  DeleteUser(value:any){
    console.log(value)
    this.DeleteUserUuid.emit(value)
  }
}
