import { Component } from '@angular/core';
import { ResumeButtonComponent } from "../../atoms/resume-button/resume-button.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ResumeButtonComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
