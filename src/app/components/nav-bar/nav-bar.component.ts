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
    // تحديث حالة التمرير عند تغيير المسار
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/project') {
          this.isScrolledPastHome.set(true);
        } else {
          this.isScrolledPastHome.set(false);
        }
      });
  }

  // استماع لحدث التمرير
  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.router.url !== '/project') {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        this.isScrolledPastHome.set(window.scrollY > homeSection.clientHeight);
      }
    }

    // تحديد القسم النشط بناءً على التمرير
    const sections = ['home', 'about', 'education', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element && this.isElementInViewport(element)) {
        this.activeSection = section;
        break;
      }
    }
  }

  // التحقق مما إذا كان العنصر في منتصف الشاشة
  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < windowHeight / 2 && rect.bottom > windowHeight / 2;
  }

  // التمرير إلى قسم معين
  scrollToSection(sectionId: string) {
    if (sectionId === 'project') {
      if (this.router.url !== '/project') {
        this.router.navigate(['/project']);
      }
    } else {
      if (this.router.url === '/project') {
        this.router.navigate(['/']).then(() => {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(sectionId);
          }, 100);
        });
      } else {
        this.viewportScroller.scrollToAnchor(sectionId);
      }
    }
  }
}
