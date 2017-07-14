import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactsService } from './contacts.service';
import { Contact } from './model';

@Component({
  moduleId: module.id,
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    
  }

}
