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
    { name: 'Angular', icon: 'assets/Skills/Angular' },
    { name: 'TypeScript', icon: 'assets/Skills/TypeScript' },
    { name: 'JavaScript', icon: 'assets/Skills/JavaScript' },
    { name: 'HTML5', icon: 'assets/Skills/HTML' },
    { name: 'CSS3', icon: 'assets/Skills/CSS' },
    { name: 'REST-API', icon: 'assets/Skills/REST-API' },
    { name: 'Supabase', icon: 'assets/Skills/Supabase' },
    { name: 'Git', icon: 'assets/Skills/Git' },
    { name: 'Material Design', icon: 'assets/Skills/MaterialDesign' },
    { name: 'Scrum', icon: 'assets/Skills/scrum' },
  ];

  learningList = [
    { name: 'React', icon: 'assets/Skills/React' },
    { name: 'Vue.js', icon: 'assets/Skills/Vue' },
  ];

  get t() {
    return this.translations[this.lang] || this.translations.de;
  }
}