import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const baseTitles = {
  about: { en: 'About the project', de: 'Über das Projekt' },
  durationText: { en: 'Duration:', de: 'Dauer:' },
  org: { en: 'How I have organised my work process', de: 'Wie ich meinen Arbeitsprozess organisiert habe' },
  tech: { en: 'Technologies', de: 'Technologien' },
  liveBtn: { en: 'Live Test', de: 'Live Test' },
  githubBtn: { en: 'GitHub', de: 'GitHub' }
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  @Input() lang: 'de' | 'en' = 'en';

  projects = [
    {
      id: 'byterunner',
      name: 'Byterunner',
      duration: { en: '3 weeks', de: '3 Wochen' },
      description: {
        en: 'A 2D jump-and-run game inspired by El Pollo Loco. Built with object-oriented programming principles in native JavaScript, featuring custom game loops, collision detection, and canvas rendering.',
        de: 'Ein 2D Jump-and-Run-Spiel, inspiriert von El Pollo Loco. Erstellt mit objektorientierten Programmierprinzipien in nativem JavaScript, inklusive eigener Game-Loops, Kollisionsabfrage und Canvas-Rendering.'
      },
      sectionTitles: {
        ...baseTitles,
        exp: { en: 'My development experience', de: 'Meine Entwicklungserfahrung' },
        orgText: {
          en: 'Focusing on clean, maintainable code structures, reusable classes, inheritance, and proper asset management to ensure smooth game performance.',
          de: 'Fokus auf saubere, wartbare Code-Strukturen, wiederverwendbare Klassen, Vererbung und ein sauberes Asset-Management für eine flüssige Spielleistung.'
        },
        expText: {
          en: 'Implemented canvas rendering, collision detection systems, game loops, and sound management entirely in native JavaScript and HTML5/CSS3.',
          de: 'Implementierung von Canvas-Rendering, Kollisionserkennungssystemen, Game-Loops und Sound-Management komplett in nativem JavaScript und HTML5/CSS3.'
        }
      },
      technologies: [
        { name: 'JavaScript', icon: './assets/project/Javascript.png' },
        { name: 'HTML5', icon: './assets/project/html.png' },
        { name: 'CSS3', icon: './assets/project/Frame 501.png' }
      ],
      image: './assets/project/ByteRunner.png',
      liveLink: 'https://marcel-schmitz-dev.github.io/ByteRunner/',
      githubLink: 'https://github.com/marcel-schmitz-dev/ByteRunner'
    },
    {
      id: 'join',
      name: 'Join',
      duration: { en: '2 months', de: '2 Monate' },
      description: {
        en: 'Task manager inspired by the Kanban system. Create and organize tasks using drag and drop, assign users and categories.',
        de: 'Task-Manager nach dem Kanban-System. Aufgaben erstellen und per Drag-and-drop organisieren, Nutzer und Kategorien zuweisen.'
      },
      sectionTitles: {
        ...baseTitles,
        exp: { en: 'My group work experience', de: 'Meine Erfahrung in der Gruppenarbeit' },
        orgText: {
          en: 'Details will follow once the group project is completed.',
          de: 'Details folgen nach Abschluss des Gruppenprojekts.'
        },
        expText: {
          en: 'Details will follow once the group project is completed.',
          de: 'Details folgen nach Abschluss des Gruppenprojekts.'
        }
      },
      technologies: [
        { name: 'HTML5', icon: './assets/project/html.png' },
        { name: 'JavaScript', icon: './assets/project/Javascript.png' },
        { name: 'CSS3', icon: './assets/project/Frame 501.png' }
      ],
      image: './assets/project/join.png',
      liveLink: '',
      githubLink: ''
    }
  ];

  selectedProject = this.projects[0];

  sectionHeader = {
    en: 'My Projects',
    de: 'Meine Projekte'
  };

  selectProject(index: number): void {
    this.selectedProject = this.projects[index];
  }

  get techNames(): string {
    return this.selectedProject.technologies.map((t) => t.name).join(', ');
  }
}