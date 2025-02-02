import { Component } from '@angular/core';

interface Project {
  image: string;
  title: string;
  description: string;
  url: string;
}

interface ModalData {
  image: string;
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      image: './assets/Ecommerce.jpg',
      title: 'Ecommerce Project',
      description: 'E-Commerce Web App is a responsive online store built with Angular, TypeScript, HTML, CSS, Bootstrap, and FontAwesome, featuring product listing, favorites, shopping cart, and API integration. The app ensures a seamless user experience with a modern and interactive design.',
      url: 'https://hassansaiedhassan.github.io/Ecommerce/',
    },
    {
      image: './assets/Movie.png',
      title: 'Movie App',
      description: 'Movie Web App is a dynamic platform for browsing and rating movies, built with HTML, CSS, Bootstrap, jQuery, API, and AJAX. It features movie listings, a rating system, search & filter options, and detailed movie information, ensuring a smooth and interactive user experience.',
      url: 'https://hassansaiedhassan.github.io/movie-App/',
    },
    {
      image: './assets/Mealify.png',
      title: 'Mealify Restaurant',
      description: 'A responsive restaurant landing page built with HTML and  CSS',
      url: 'https://hassansaiedhassan.github.io/Mealfy/',
    },
    {
      image: './assets/Fokir.png',
      title: 'Fokir Portfolio',
      description: 'A personal portfolio website built with HTML, CSS, and JavaScript.',
      url: 'https://hassansaiedhassan.github.io/portofolio/',
    },
    {
      image: './assets/BookMarker.png',
      title: 'BookMarker App',
      description: 'Bakery Website is a visually appealing platform built with HTML and CSS, showcasing bakery products with detailed descriptions. It features a clean design, smooth navigation, and a fully responsive layout for an enhanced user experience.',
      url: 'https://hassansaiedhassan.github.io/Bookmarker-Bookmark-your-favorite-sites-/',
    },
    {
      image: './assets/Bakery.png',
      title: 'Bakery Website',
      description: 'A bakery website built with HTML, CSS',
      url: 'https://hassansaiedhassan.github.io/Bakery/',
    },
  ];

  showModal = false;
  selectedImage = '';
  selectedTitle = '';
  selectedDescription = '';
  selectedUrl = '';

  displayData(image: string, title: string, description: string, url: string) {
    this.selectedImage = image;
    this.selectedTitle = title;
    this.selectedDescription = description;
    this.selectedUrl = url;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}