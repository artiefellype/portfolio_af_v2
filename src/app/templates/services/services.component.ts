import { Component } from '@angular/core';
import { MainTitleComponent } from '../../atoms/main-title/main-title.component';
import { ServiceCardComponent } from "../../molecules/service-card/service-card.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MainTitleComponent, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
