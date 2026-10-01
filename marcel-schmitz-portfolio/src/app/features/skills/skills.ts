import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  @Input() lang: 'de' | 'en' = 'de';

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

  skillList = [
    { name: 'Angular', label: 'Angular', icon: './assets/Skills/Angular.png' },
    { name: 'TypeScript', label: 'TypeScript', icon: './assets/Skills/TypeScript.png' },
    { name: 'JavaScript', label: 'JavaScript', icon: './assets/Skills/JavaScript.png' },
    { name: 'HTML5', label: 'HTML', icon: './assets/Skills/HTML.png' },
    { name: 'CSS3', label: 'CSS', icon: './assets/Skills/CSS.png' },
    { name: 'REST-API', label: 'REST-API', icon: './assets/Skills/REST-API.png' },
    { name: 'Supabase', label: 'Supabase', icon: './assets/Skills/Supabase.png' },
    { name: 'Git', label: 'Git', icon: './assets/Skills/Git.png' },
    { name: 'Material Design', label: 'Material', icon: './assets/Skills/MaterialDesign.png' },
    { name: 'Scrum', label: 'Scrum', icon: './assets/Skills/scrum.png' },
  ];

  learningList = [
    { name: 'React', icon: './assets/Skills/React.png' },
    { name: 'Vue.js', icon: './assets/Skills/Vue.png' },
  ];

  get t() {
    return this.translations[this.lang] || this.translations.de;
  }
}