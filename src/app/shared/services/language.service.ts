import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

/** Unterstützte Sprachen der Anwendung. */
export type Lang = 'de' | 'en';

/**
 * Hält die gewählte Sprache zentral für alle Komponenten
 * und setzt das lang-Attribut des HTML-Elements passend dazu.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  /** Zugriff auf das Dokument, um das lang-Attribut zu setzen. */
  private document = inject(DOCUMENT);

  /** Aktuell gewählte Sprache (Standard: Englisch). */
  private current: Lang = 'en';

  /**
   * Gibt die aktuelle Sprache zurück.
   * @returns Die aktive Sprache.
   */
  get lang(): Lang {
    return this.current;
  }

  /**
   * Setzt die Sprache und aktualisiert das lang-Attribut des HTML-Elements.
   * @param value Die neue Sprache.
   */
  set lang(value: Lang) {
    this.current = value;
    this.document.documentElement.lang = value;
  }

  /** Wechselt zwischen Deutsch und Englisch. */
  toggle(): void {
    this.lang = this.current === 'de' ? 'en' : 'de';
  }
}
