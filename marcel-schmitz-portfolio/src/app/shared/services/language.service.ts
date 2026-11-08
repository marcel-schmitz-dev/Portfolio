import { Injectable } from '@angular/core';

export type Lang = 'de' | 'en';

/** Hält die gewählte Sprache über alle Seiten hinweg (Home, Impressum, Datenschutz). */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang: Lang = 'en';

  toggle(): void {
    this.lang = this.lang === 'de' ? 'en' : 'de';
  }
}
