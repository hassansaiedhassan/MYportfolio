import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      image: './assets/Ecommerce.jpg',
      title: 'Ecommerce Project',
      description: 'A fully functional e-commerce website built with Angular and Bootstrap.'
    },
    {
      image: './assets/Movie.png',
      title: 'Movie App',
      description: 'A movie search application built with React and the TMDB API.'
    },
    {
      image: './assets/Mealify.png',
      title: 'Mealify Restaurant',
      description: 'A responsive restaurant landing page built with HTML, CSS, and JavaScript.'
    },
    {
      image: './assets/Fokir.png',
      title: 'Fokir Portfolio',
      description: 'A personal portfolio website built with HTML, CSS, and JavaScript.'
    },
    {
      image: './assets/BookMarker.png',
      title: 'BookMarker App',
      description: 'A bookmark manager application built with Angular and Firebase.'
    },
    {
      image: './assets/Bakery.png',
      title: 'Bakery Website',
      description: 'A bakery website built with HTML, CSS, and JavaScript.'
    }
  ];

  showModal = false;
  selectedImage = '';
  selectedTitle = '';
  selectedDescription = '';

  displayData(image: string, title: string, description: string) {
    this.selectedImage = image;
    this.selectedTitle = title;
    this.selectedDescription = description;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
