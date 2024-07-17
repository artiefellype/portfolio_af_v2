import { Component } from '@angular/core';
import { HomeComponent } from '../../templates/home/home.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
