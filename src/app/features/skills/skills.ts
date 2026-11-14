import { Component, Input } from '@angular/core';

/** Abschnitt mit meinen Fähigkeiten und den Technologien, die ich gerade lerne. */
@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  /** Aktuelle Sprache der Komponente (Deutsch oder Englisch). */
  @Input() lang: 'de' | 'en' = 'de';

  /** Übersetzte Texte der Komponente. */
  translations = {
    de: {
      title: 'Fähigkeiten',
      learningTitle: 'Lerne ich gerade',
      learningText: 'Am Puls der Zeit – vertiefe kontinuierlich Architekturmuster und moderne Web-Konzepte.',
      buttonText: 'Lass uns sprechen'
    },
    en: {
      title: 'My Skills',
      learningTitle: 'I am currently learning',
      learningText: 'Always expanding horizons: diving deeper into modern web architecture and patterns.',
      buttonText: "Let's talk"
    }
  };

  /** Technologien, die ich beherrsche. */
  skillList = [
    { name: 'Angular', icon: './assets/Skills/Angular.png' },
    { name: 'TypeScript', icon: './assets/Skills/TypeScript.png' },
    { name: 'JavaScript', icon: './assets/Skills/JavaScript.png' },
    { name: 'HTML5', icon: './assets/Skills/HTML.png' },
    { name: 'CSS3', icon: './assets/Skills/CSS.png' },
    { name: 'REST-API', icon: './assets/Skills/REST-API.png' },
    { name: 'Supabase', icon: './assets/Skills/Supabase.png' },
    { name: 'Git', icon: './assets/Skills/Git.png' },
    { name: 'Material Design', icon: './assets/Skills/MaterialDesign.png' },
    { name: 'Scrum', icon: './assets/Skills/scrum.png' },
  ];

  /** Technologien, die ich gerade lerne. */
  learningList = [
    { name: 'React', icon: './assets/Skills/React.png' },
    { name: 'Vue.js', icon: './assets/Skills/Vue.png' },
  ];

  /**
   * Liefert die Texte in der aktuell gewählten Sprache.
   * @returns Das Übersetzungsobjekt der aktuellen Sprache.
   */
  get t() {
    return this.translations[this.lang] || this.translations.de;
  }
}