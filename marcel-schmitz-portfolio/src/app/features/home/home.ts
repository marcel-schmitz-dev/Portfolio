import { Component } from '@angular/core';
import { WhyMe } from '../../shared/components/why-me/why-me';

@Component({
  selector: 'app-home',
  imports: [WhyMe],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  currentLang: 'de' | 'en' = 'de';

  translations = {
  de: {
    subtitle: 'FRONTEND DEVELOPER',
    whyMe: 'Warum ich',
    skills: 'Fähigkeiten',
    projects: 'Projekte',
    contact: 'Kontakt'
  },
  en: {
    subtitle: 'FRONTEND DEVELOPER',
    whyMe: 'Why me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact'
  }
};

  get t() {
    return this.translations[this.currentLang];
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
  }
}