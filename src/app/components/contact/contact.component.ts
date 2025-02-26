import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() name: string = '';
  @Input() telephone: string = '';
}
