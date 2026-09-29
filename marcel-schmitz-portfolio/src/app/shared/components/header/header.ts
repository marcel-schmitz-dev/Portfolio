import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  @Input() currentLang: 'de' | 'en' = 'en';
  @Input() t: any;
  @Output() langChange = new EventEmitter<void>();

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  onToggleLanguage(): void {
    this.langChange.emit();
  }

  onLogoClick(): void {
    this.navigateToSection('');
  }

  navigateToSection(sectionId: string): void {
    const currentPath = this.router.url.split('#')[0];

    if (currentPath === '/' || currentPath === '') {
      if (sectionId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        this.scrollToElement(sectionId);
      }
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          if (sectionId !== '') {
            this.scrollToElement(sectionId);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 150);
      });
    }
  }

  private scrollToElement(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}