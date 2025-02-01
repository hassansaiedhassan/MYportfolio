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
  // نستخدم signal لتتبع ما إذا كان قد تم التمرير بعد قسم home
  isScrolledPastHome = signal(false);

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    // إذا كنت ترغب بتغيير الخلفية بناءً على التغييرات في الروت، يمكنك استخدام هذا الاشتراك.
    // إذا لم تكن بحاجة لذلك، يمكنك إزالة هذا الاشتراك.
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // مثال: إذا تغير الرابط إلى "/about" نجعل الخلفية ثابتة
        if (event.url === '/about') {
          this.isScrolledPastHome.set(true);
        } else {
          this.isScrolledPastHome.set(false);
        }
      });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // تحديث isScrolledPastHome بناءً على موقع التمرير مقارنة بارتفاع قسم "home"
    const homeSection = document.getElementById('home');
    if (homeSection) {
      this.isScrolledPastHome.set(window.scrollY > homeSection.clientHeight);
    }

    // تحديد القسم النشط بناءً على التمرير
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
