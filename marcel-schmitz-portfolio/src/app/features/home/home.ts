import { Component } from '@angular/core';
import { WhyMe } from '../why-me/why-me';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { ContactMe } from '../contact-me/contact-me';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhyMe, Skills, Projects, ContactMe, Header, Footer],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  currentLang: 'de' | 'en' = 'en';
  isMenuOpen = false;

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

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  switchLang(lang: 'de' | 'en'): void {
    this.currentLang = lang;
  }
}