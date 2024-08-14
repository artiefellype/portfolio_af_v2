import { Component } from '@angular/core';
import { MainTitleComponent } from '../../atoms/main-title/main-title.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
