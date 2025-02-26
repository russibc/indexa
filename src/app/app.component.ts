import { Component } from '@angular/core';
import { Contact } from './models/Contact';
import contacts from './contacts.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  alphabet: string ='abcdefghijklmnopqrstuvwxyz';
  contactsList: Contact[] = contacts;
  filterByText: string = '';

  filterContactsByText() : Contact[] {  
    return this.contactsList.filter(contact => contact.name.toLowerCase().includes(this.filterByText.toLowerCase()));
  }

  filterContactsByInitialLetter(letter: string): Contact[] {
    return this.filterContactsByText().filter(contact => contact.name.toLowerCase().startsWith
    (letter.toLowerCase()));
  }
}
