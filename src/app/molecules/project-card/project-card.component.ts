import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit{
  @Input() iconsSvgContent: string[] = [];
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectBackgroundImg: string = '';
  @Input() projectLink: string = '';

  safeIcons: SafeHtml[] = [];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeIcons = this.iconsSvgContent.map(icon => this.sanitizer.bypassSecurityTrustHtml(icon));
  }

  onCardClick() {
    if(this.projectLink) {
      window.open(this.projectLink, '_blank');
    }
  }

}
