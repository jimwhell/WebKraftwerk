import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { TechnologiesListComponent } from './components/technologies-list/technologies-list.component';
import { CertificationsListComponent } from './components/certifications-list/certifications-list.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import Lenis from 'lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    JumbotronComponent,
    CommonModule,
    ProjectsListComponent,
    SkillsListComponent,
    TechnologiesListComponent,
    CertificationsListComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('wrapper', { static: true }) wrapperRef!: ElementRef;
  @ViewChild('content', { static: true }) contentRef!: ElementRef;

  title = 'jimwell-dev';
  private lenis!: Lenis;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.menuState = 'closed';
  }

  ngAfterViewInit(): void {
    this.lenis = new Lenis({
      wrapper: this.wrapperRef.nativeElement,
      content: this.contentRef.nativeElement,
      lerp: 0.03,
      smoothWheel: true,
    });

    this.ngZone.runOutsideAngular(() => {
      const animate = (time: number) => {
        this.lenis.raf(time);
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });
  }

  protected menuState: 'open' | 'closed' = 'closed';
  toggleMenuState(): void {
    this.menuState = this.menuState === 'closed' ? 'open' : 'closed';
  }

  toggleMenuStateFromChild(state: 'open' | 'closed'): void {
    this.menuState = state;
  }

  scrollToSection(sectionId: string): void {
    const target: HTMLElement | null = document.getElementById(sectionId);

    if (target !== null) {
      this.lenis.scrollTo(target);
      this.menuState = 'closed';
    }
  }
}
