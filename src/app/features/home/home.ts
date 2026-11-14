import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { WhyMe } from '../why-me/why-me';
import { Skills } from '../skills/skills';
import { Projects } from '../projects/projects';
import { Teamplayer } from '../teamplayer/teamplayer';
import { ContactMe } from '../contact-me/contact-me';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

/** Startseite: Hero-Bereich mit Mobile-Menü und alle Abschnitte des Portfolios. */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WhyMe, Skills, Projects, Teamplayer, ContactMe, Header, Footer],
  styleUrls: ['./home.scss', './home-menu.scss'],
  templateUrl: './home.html',
})
export class Home {
  /** Zentraler Dienst für die gewählte Sprache. */
  private language = inject(LanguageService);
  /** Gibt an, ob das mobile Menü geöffnet ist. */
  isMenuOpen = false;

  /**
   * Gibt die aktuelle Sprache zurück.
   * @returns Die aktive Sprache.
   */
  get currentLang(): 'de' | 'en' {
    return this.language.lang;
  }
  /**
   * Setzt die aktuelle Sprache.
   * @param value Die neue Sprache.
   */
  set currentLang(value: 'de' | 'en') {
    this.language.lang = value;
  }

  /** Übersetzte Texte der Komponente. */
  translations = {
    de: {
      subtitle: 'FRONTEND-ENTWICKLER',
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

  /**
   * Liefert die Texte in der aktuell gewählten Sprache.
   * @returns Das Übersetzungsobjekt der aktuellen Sprache.
   */
  get t() {
    return this.translations[this.currentLang];
  }

  /** Wechselt zwischen Deutsch und Englisch. */
  toggleLanguage(): void {
    this.language.toggle();
  }

  /** Öffnet bzw. schließt das mobile Menü. */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Schließt das Menü und scrollt weich zum gewünschten Abschnitt.
   * @param sectionId ID des Zielabschnitts.
   */
  scrollToSection(sectionId: string): void {
    this.isMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Setzt die Sprache direkt und schließt das mobile Menü.
   * @param lang Die gewünschte Sprache.
   */
  switchLang(lang: 'de' | 'en'): void {
    this.currentLang = lang;
    this.isMenuOpen = false;
  }
}