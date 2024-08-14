import { Component } from '@angular/core';
import { HomeComponent } from '../../templates/home/home.component';
import { AboutComponent } from "../../templates/about/about.component";
import { ProjectsComponent } from "../../templates/projects/projects.component";
import { ServicesComponent } from "../../templates/services/services.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ProjectsComponent, ServicesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
