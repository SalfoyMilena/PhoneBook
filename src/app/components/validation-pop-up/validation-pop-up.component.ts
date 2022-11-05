import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-validation-pop-up',
  templateUrl: './validation-pop-up.component.html',
  styleUrls: ['./validation-pop-up.component.scss']
})
export class ValidationPopUpComponent implements OnInit {
  @Input() openPopUp

  @Output() ClosePopUp :EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() DeleteUserUuid: EventEmitter<string> = new EventEmitter<string>();
  @Input() uuid:string;
  constructor() { }
  ngOnInit(): void {
  }
  leave(){
    this.ClosePopUp.emit(false);
  }
  delete(){
    this.DeleteUserUuid.emit(this.uuid);
  }

}
