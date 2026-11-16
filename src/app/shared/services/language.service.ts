import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

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

  /** Prüft, ob der Code im Browser läuft (localStorage nur dort verfügbar). */
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Aktuell gewählte Sprache (Standard: Englisch). */
  private current: Lang = 'en';

  /** Liest die gespeicherte Sprache aus dem localStorage und setzt sie. */
  constructor() {
    const saved = this.readStored();
    if (saved) {
      this.lang = saved;
    }
  }

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
    this.store(value);
  }

  /** Wechselt zwischen Deutsch und Englisch. */
  toggle(): void {
    this.lang = this.current === 'de' ? 'en' : 'de';
  }

  /**
   * Liest die gespeicherte Sprache aus dem localStorage.
   * @returns Die gespeicherte Sprache oder null, wenn keine gültige vorhanden ist.
   */
  private readStored(): Lang | null {
    if (!this.isBrowser) return null;
    try {
      const value = localStorage.getItem('lang');
      return value === 'de' || value === 'en' ? value : null;
    } catch {
      return null;
    }
  }

  /**
   * Speichert die gewählte Sprache im localStorage.
   * @param value Die zu speichernde Sprache.
   */
  private store(value: Lang): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem('lang', value);
    } catch {}
  }
}
