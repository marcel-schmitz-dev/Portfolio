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
      name: { de: 'Teamkollege', en: 'Teammate' },
      project: { de: 'Gruppenprojekt', en: 'Group project' },
      projectLink: '#projects',
      quote: {
        de: 'Das Feedback aus meinem Team folgt in Kürze.',
        en: 'Feedback from my team will follow soon.',
      },
      linkedin: '#',
    },
    {
      name: { de: 'Teamkollege', en: 'Teammate' },
      project: { de: 'Gruppenprojekt', en: 'Group project' },
      projectLink: '#projects',
      quote: {
        de: 'Das Feedback aus meinem Team folgt in Kürze.',
        en: 'Feedback from my team will follow soon.',
      },
      linkedin: '#',
    },
    {
      name: { de: 'Teamkollege', en: 'Teammate' },
      project: { de: 'Gruppenprojekt', en: 'Group project' },
      projectLink: '#projects',
      quote: {
        de: 'Das Feedback aus meinem Team folgt in Kürze.',
        en: 'Feedback from my team will follow soon.',
      },
      linkedin: '#',
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