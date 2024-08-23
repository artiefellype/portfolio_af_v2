import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-button',
  standalone: true,
  imports: [],
  templateUrl: './resume-button.component.html',
  styleUrl: './resume-button.component.scss'
})
export class ResumeButtonComponent {
  constructor(private router: Router) {}

  goToUrl(url: string): void {
    window.open(url, "_blank");
  }
}
