import { Component, HostListener, signal } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  activeSection: string = 'home';
  isScrolledPastHome = signal(false);

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/about') {
          this.isScrolledPastHome.set(true);
        } else {
          this.isScrolledPastHome.set(false);
        }
      });
  }

  @HostListener('window:scroll')
  onWindowScroll() {

    const homeSection = document.getElementById('home');
    if (homeSection) {
      this.isScrolledPastHome.set(window.scrollY > homeSection.clientHeight);
    }

    const sections = ['home', 'about', 'education', 'project', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && this.isElementInViewport(element)) {
        this.activeSection = section;
        break;
      }
    }
  }

  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
