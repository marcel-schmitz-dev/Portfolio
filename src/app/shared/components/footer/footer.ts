import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/** Fußzeile mit Links zu Impressum und Datenschutzerklärung. */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  /** Aktuelle Sprache der Komponente (Deutsch oder Englisch). */
  @Input() lang: 'de' | 'en' = 'en';

  /** Übersetzte Texte der Komponente. */
  translations = {
    de: {
      legalNotice: 'Impressum',
      privacyPolicy: 'Datenschutzerklärung',
      copyright: '© Marcel Schmitz 2026'
    },
    en: {
      legalNotice: 'Legal Notice',
      privacyPolicy: 'Privacy Policy',
      copyright: '© Marcel Schmitz 2026'
    }
  };

  /**
   * Liefert die Texte in der aktuell gewählten Sprache.
   * @returns Das Übersetzungsobjekt der aktuellen Sprache.
   */
  get t() {
    return this.translations[this.lang];
  }
}