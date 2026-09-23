import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: string;
  name: string;
  duration: string;
  description: {
    en: string;
    de: string;
  };
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  ongoing?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  currentLang: 'de' | 'en' = 'en'; // Standard Englisch wie besprochen

  projects: Project[] = [
    {
      id: 'dabubble',
      name: 'DA Bubble',
      duration: '4 weeks',
      description: {
        en: 'Rethinking chat communication. Built with Angular, TypeScript, and Firebase.',
        de: 'Chat-Kommunikation neu gedacht. Erstellt mit Angular, TypeScript und Firebase.'
      },
      technologies: ['Angular', 'TypeScript', 'Firebase', 'SCSS'],
      image: '/assets/projects/dabubble.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'join',
      name: 'Join',
      duration: '3 weeks',
      description: {
        en: 'Task manager inspired by the Kanban System. Create and organize tasks.',
        de: 'Task-Manager inspiriert vom Kanban-System. Aufgaben erstellen und organisieren.'
      },
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      image: '/assets/projects/join.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'sharkie',
      name: 'Sharkie',
      duration: '3 weeks',
      description: {
        en: 'A 2D jump-and-run game based on object-oriented programming.',
        de: 'Ein 2D Jump-and-Run-Spiel auf Basis objektorientierter Programmierung.'
      },
      technologies: ['JavaScript', 'OOP', 'HTML5 Canvas'],
      image: '/assets/projects/sharkie.png',
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 'ongoing',
      name: 'Ongoing Project',
      duration: 'Coming Soon',
      description: {
        en: 'Next big thing currently in planning and development phase.',
        de: 'Das nächste große Ding aktuell in der Planungs- und Entwicklungsphase.'
      },
      technologies: ['Angular', 'Supabase', 'Tailwind'],
      image: '/assets/projects/ongoing.png',
      ongoing: true
    }
  ];

  selectedProject: Project = this.projects[0];

  selectProject(project: Project) {
    this.selectedProject = project;
  }
}