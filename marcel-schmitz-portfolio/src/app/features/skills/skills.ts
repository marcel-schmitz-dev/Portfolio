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
      learningText: 'Am Puls der Zeit – vertiefe kontinuierlich Architekturmuster und moderne Web-Konzepte.'
    },
    en: {
      title: 'My Skills',
      learningTitle: 'I am currently learning',
      learningText: 'Always expanding horizons: diving deeper into modern web architecture and patterns.'
    }
  };

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

learningList = [
  { name: 'React', icon: './assets/Skills/React.png' },
  { name: 'Vue.js', icon: './assets/Skills/Vue.png' },
];

  get t() {
    return this.translations[this.lang] || this.translations.de;
  }
}