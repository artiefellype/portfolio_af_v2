import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from "../../molecules/nav-bar/nav-bar.component";
import { ResumeButtonComponent } from "../../atoms/resume-button/resume-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, NavBarComponent, ResumeButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  meuTitle = "HEADER"

  numero = 23

}
