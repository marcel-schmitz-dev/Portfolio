import { Component, Input } from '@angular/core';

interface Review {
  name: string;
  project: string;
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
      name: 'Teammitglied 1',
      project: 'DA Bubble',
      projectLink: '#projects',
      quote: {
        de: 'Platzhalter: Hier steht bald das Feedback aus meinem Team.',
        en: 'Placeholder: Feedback from my team will appear here soon.',
      },
      linkedin: '#',
    },
    {
      name: 'Teammitglied 2',
      project: 'Join',
      projectLink: '#projects',
      quote: {
        de: 'Platzhalter: Hier steht bald das Feedback aus meinem Team.',
        en: 'Placeholder: Feedback from my team will appear here soon.',
      },
      linkedin: '#',
    },
    {
      name: 'Teammitglied 3',
      project: 'Join',
      projectLink: '#projects',
      quote: {
        de: 'Platzhalter: Hier steht bald das Feedback aus meinem Team.',
        en: 'Placeholder: Feedback from my team will appear here soon.',
      },
      linkedin: '#',
    },
  ];

  get t() {
    return this.translations[this.lang];
  }
}