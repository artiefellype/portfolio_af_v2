import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-main-title',
  standalone: true,
  imports: [],
  templateUrl: './main-title.component.html',
  styleUrl: './main-title.component.scss'
})
export class MainTitleComponent {
  @Input() firstTitle: string = ""
  @Input() secondTitle: string = ""
  @Input() thirdTitle: string = ""
}
