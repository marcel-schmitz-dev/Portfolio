import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss',
})
export class WhyMe {
  @Input() lang: 'de' | 'en' = 'de';

  translations = {
    de: {
      title: 'Warum ich',
      locationPrefix: 'Ich',
      locationSuffix: 'befinde mich in Wegberg.',
      description: 'Code ist für mich mehr als Syntax – es ist Problemlösung. Mit analytischem Denken, Ausdauer und Blick fürs Detail übersetze ich komplexe Anforderungen in saubere, nutzerfreundliche Anwendungen.',
      buttonText: 'Lass uns sprechen'
    },
    en: {
      title: 'Why me',
      locationPrefix: 'I am',
      locationSuffix: 'located in Wegberg.',
      description: 'I turn complex problems into clean, intuitive code. Combining analytical thinking, creativity, and persistence, I build web solutions that deliver a reliable user experience.',
      buttonText: "Let's talk"
    }
  };

  get t() {
    return this.translations[this.lang] || this.translations.de;
  }
}