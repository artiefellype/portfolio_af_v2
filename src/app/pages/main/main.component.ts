import { Component } from '@angular/core';
import { HomeComponent } from '../../templates/home/home.component';
import { AboutComponent } from "../../templates/about/about.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, AboutComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
