import { Component, Input } from '@angular/core';

interface Review {
  name: { de: string; en: string };
  project: { de: string; en: string };
  projectLink: string;
  quote: { de: string; en: string };
  linkedin: string;
}

@Component({
  selector: 'app-teamplayer',
  standalone: true,
  imports: [],
  templateUrl: './teamplayer.html',
  styleUrl: './teamplayer.scss',
})
export class Teamplayer {
  @Input() lang: 'de' | 'en' = 'en';

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

  get t() {
    return this.translations[this.lang];
  }
}