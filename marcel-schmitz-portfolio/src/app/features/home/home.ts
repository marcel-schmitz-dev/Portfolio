import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { WhyMe } from '../why-me/why-me';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import {Teamplayer} from "../teamplayer/teamplayer";
import { ContactMe } from '../contact-me/contact-me';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhyMe, Skills, Projects,Teamplayer, ContactMe, Header, Footer],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  private language = inject(LanguageService);
  isMenuOpen = false;

  get currentLang(): 'de' | 'en' {
    return this.language.lang;
  }
  set currentLang(value: 'de' | 'en') {
    this.language.lang = value;
  }

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
    this.language.toggle();
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
    this.isMenuOpen = false;
  }
}