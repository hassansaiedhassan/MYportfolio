import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  activeTab: string = 'university';

  showContent(tab: string) {
    this.activeTab = tab;
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
      if (button.textContent?.toLowerCase().includes(tab)) {
        button.classList.add('active');
        button.classList.remove('inactive');
      } else {
        button.classList.add('inactive');
        button.classList.remove('active');
      }
    });
  }
}
