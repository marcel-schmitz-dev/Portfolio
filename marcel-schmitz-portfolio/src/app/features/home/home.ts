import { Component } from '@angular/core';
import { WhyMe } from '../why-me/why-me';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { ContactMe } from '../contact-me/contact-me';
import { Footer } from '../footer/footer'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhyMe, Skills, Projects, ContactMe, Footer],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  currentLang: 'de' | 'en' = 'en';

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