import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      duration: '3 weeks',
      title: {
        en: 'Byterunner',
        de: 'Byterunner'
      },
      description: {
        en: 'A 2D jump-and-run game inspired by El Pollo Loco. Built with object-oriented programming principles in native JavaScript, featuring custom game loops, collision detection, and canvas rendering.',
        de: 'Ein 2D Jump-and-Run-Spiel, inspiriert von El Pollo Loco. Erstellt mit objektorientierten Programmierprinzipien in nativem JavaScript, inklusive eigener Game-Loops, Kollisionsabfrage und Canvas-Rendering.'
      },
      sectionTitles: {
        about: { en: 'About the project', de: 'Über das Projekt' },
        durationText: { en: 'Duration:', de: 'Dauer:' },
        org: { en: 'How I have organised my work process', de: 'Wie ich meinen Arbeitsprozess organisiert habe' },
        orgText: { 
          en: 'Focusing on clean, maintainable code structures, reusable classes, inheritance, and proper asset management to ensure smooth game performance.', 
          de: 'Fokus auf saubere, wartbare Code-Strukturen, wiederverwendbare Klassen, Vererbung und ein sauberes Asset-Management für eine flüssige Spielleistung.' 
        },
        exp: { en: 'My development experience', de: 'Meine Entwicklungserfahrung' },
        expText: { 
          en: 'Implemented canvas rendering, collision detection systems, game loops, and sound management entirely in native JavaScript and HTML5/CSS3.', 
          de: 'Implementierung von Canvas-Rendering, Kollisionserkennungssystemen, Game-Loops und Sound-Management komplett in nativem JavaScript und HTML5/CSS3.' 
        },
        tech: { en: 'Technologies', de: 'Technologien' },
        liveBtn: { en: 'Live Test', de: 'Live Test' },
        githubBtn: { en: 'GitHub', de: 'GitHub' }
      },

      technologies: [
        { name: 'JavaScript', icon: './assets/project/Javascript.png' },
        { name: 'HTML5', icon: './assets/project/html.png' },
        { name: 'CSS3', icon: './assets/project/Frame 501.png' },
      ],
      image: './assets/project/ByteRunner.png',
      liveLink: 'https://marcel-schmitz-dev.github.io/ByteRunner/',
      githubLink: 'https://github.com/marcel-schmitz-dev/ByteRunner'
    }
  ];

  selectedProject = this.projects[0];

  sectionHeader = {
    en: 'My Projects',
    de: 'Meine Projekte'
  };
}