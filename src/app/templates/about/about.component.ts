import { Component } from '@angular/core';
import { MainTitleComponent } from "../../atoms/main-title/main-title.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MainTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  title = "QUEM"
  subtitle = "SOU EU"
}
