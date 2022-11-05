import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PhoneBookPageComponent } from './components/phone-book-page/phone-book-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactsItemComponent } from './components/contacts-item/contacts-item.component';
import { EditPopUpComponent } from './components/edit-pop-up/edit-pop-up.component';
import { ValidationPopUpComponent } from './components/validation-pop-up/validation-pop-up.component';
import { AddUserPopUpComponent } from './components/add-user-pop-up/add-user-pop-up.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookPageComponent,
    HeaderComponent,
    ContactsListComponent,
    ContactsItemComponent,
    EditPopUpComponent,
    ValidationPopUpComponent,
    AddUserPopUpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatMenuModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
