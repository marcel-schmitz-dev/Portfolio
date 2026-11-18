import { Component, Input } from '@angular/core';

/** Eine Stimme aus dem Team mit Projektbezug und Profil-Link. */
interface Review {
  name: { de: string; en: string };
  project: { de: string; en: string };
  projectLink: string;
  quote: { de: string; en: string };
  linkedin: string;
}

/** Abschnitt „Need a teamplayer?“ mit Feedback aus dem Team. */
@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer.html',
  styleUrl: './teamplayer.scss',
})
export class Teamplayer {
  /** Aktuelle Sprache der Komponente (Deutsch oder Englisch). */
  @Input() lang: 'de' | 'en' = 'en';

  /** Übersetzte Texte der Komponente. */
  translations = {
    de: {
      title: 'Du suchst einen Teamplayer? Das sagen meine Kolleg:innen über mich',
      project: 'Projekt',
      linkedin: 'LinkedIn-Profil',
    },
    en: {
      title: 'Need a teamplayer? Here’s what my colleagues say about me',
      project: 'Project',
      linkedin: 'LinkedIn Profile',
    },
  };

  /** Angezeigte Teamstimmen. */
  reviews: Review[] = [
    {
      name: { de: 'Vincent', en: 'Vincent' },
      project: { de: 'Join', en: 'Join' },
      projectLink: '#projects',
      quote: {
        de: 'Er hatte immer einen guten Überblick über die Codebasis und wusste genau, wo Anpassungen nötig waren. Bei Dozenten-Feedback, Sprint-Reviews und Fehlerbehebung war seine Unterstützung sehr wertvoll.',
        en: 'He always had a good overview of the codebase and knew exactly where changes were needed. His support with instructor feedback, sprint reviews and bug fixing was very valuable.',
      },
      linkedin: 'https://www.linkedin.com/in/vincent-lange-4a27861a3/',
    },
    {
      name: { de: 'Elias', en: 'Elias' },
      project: { de: 'Join', en: 'Join' },
      projectLink: '#projects',
      quote: {
        de: 'Neben der Entwicklung hat er viel Verantwortung für Organisation und Struktur übernommen. Mit seinem Überblick über die Codebasis konnte er Änderungen gezielt umsetzen.',
        en: 'Besides developing, he took on a lot of responsibility for organisation and structure. Thanks to his overview of the codebase, he could implement changes in a targeted way.',
      },
      linkedin: 'https://www.linkedin.com/in/elias-hashimi-039528120/',
    },
    {
      name: { de: 'Christian', en: 'Christian' },
      project: { de: 'Join', en: 'Join' },
      projectLink: '#projects',
      quote: {
        de: 'Er hat den Überblick über Aufgaben und Entwicklungsstand behalten und viel Eigeninitiative gezeigt. So haben wir das Projekt gemeinsam und vorzeitig abgeschlossen.',
        en: 'He kept track of tasks and the state of development and showed a lot of initiative. This is how we finished the project together and ahead of schedule.',
      },
      linkedin: 'https://www.linkedin.com/in/christian-sobotta-16786b450/',
    },
  ];

  /**
   * Liefert die Texte in der aktuell gewählten Sprache.
   * @returns Das Übersetzungsobjekt der aktuellen Sprache.
   */
  get t() {
    return this.translations[this.lang];
  }
}