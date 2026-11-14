import { Component, Input, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { timeout } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/** Erlaubte Zeichen für Namen: Buchstaben, getrennt durch Leerzeichen, Apostroph oder Bindestrich. */
const NAME_PATTERN = /^[\p{L}]+(?:[ '-][\p{L}]+)*$/u;

/**
 * Prüft, ob der Text aus mindestens zwei Namensteilen mit je mindestens zwei Buchstaben besteht.
 * @param value Der bereinigte Name.
 * @returns true, wenn Vor- und Nachname erkannt werden.
 */
function isFullName(value: string): boolean {
  const parts = value.split(/\s+/);
  return parts.length >= 2 && parts.every((p) => p.replace(/[-']/g, '').length >= 2);
}

/**
 * Validator für den vollständigen Namen (Vor- und Nachname, nur Buchstaben).
 * @returns Validator, der bei ungültigem Namen den Fehler invalidName liefert.
 */
export function strictNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const raw = control.value ?? '';
    if (!raw) return null;
    const value = raw.trim();
    if (!value) return { invalidName: true };
    return NAME_PATTERN.test(value) && isFullName(value) ? null : { invalidName: true };
  };
}

/**
 * Validator für die Nachricht (mindestens 10 Zeichen und echter Text).
 * @returns Validator, der bei ungültiger Nachricht den Fehler invalidMessage liefert.
 */
export function strictMessageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const isLongEnough = value.trim().length >= 10;
    const hasLetters = /[a-zA-ZäöüÄÖÜß]{3,}/.test(value);
    return (isLongEnough && hasLetters) ? null : { invalidMessage: true };
  };
}

/** Bekannte Domain-Endungen mit mehr als zwei Buchstaben. */
const COMMON_TLDS = [
  'com', 'net', 'org', 'info', 'biz', 'edu', 'gov', 'name', 'pro', 'mobi',
  'dev', 'app', 'online', 'site', 'shop', 'store', 'tech', 'xyz', 'email',
  'cloud', 'blog', 'agency', 'berlin', 'koeln', 'nrw', 'club', 'live', 'digital'
];

/**
 * Validator für E-Mail-Adressen inklusive Prüfung der Domain-Endung.
 * @returns Validator, der bei ungültiger Adresse den Fehler email liefert.
 */
export function strictEmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value ?? '';
    if (!value) return null;

    const emailRegex = /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;
    if (!emailRegex.test(value)) return { email: true };

    const tld = value.split('.').pop()!.toLowerCase();
    const isKnownTld = tld.length === 2 || COMMON_TLDS.includes(tld);

    return isKnownTld ? null : { email: true };
  };
}

/** Kontaktabschnitt mit Formular, Validierung und Mailversand über sendMail.php. */
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  /** Aktuelle Sprache der Komponente (Deutsch oder Englisch). */
  @Input() lang: 'de' | 'en' = 'en';
  
  /** Formular mit Name, E-Mail, Nachricht und Datenschutz-Checkbox. */
  contactForm: FormGroup;
  /** Gibt an, ob das Formular abgeschickt wurde. */
  isSubmitted = false;
  /** Gibt an, ob die Nachricht erfolgreich gesendet wurde. */
  submitSuccess = false;
  /** Gibt an, ob der Versand fehlgeschlagen ist. */
  submitError = false;
  /** Gibt an, ob gerade gesendet wird. */
  isSending = false;
  /** HTTP-Client für den Versand. */
  private http = inject(HttpClient);
  /** Adresse des PHP-Skripts für den Mailversand. */
  private readonly mailEndpoint = '/sendMail.php';

  /** Wurde das Namensfeld bereits verlassen? */
  nameTouched = false;
  /** Wurde das E-Mail-Feld bereits verlassen? */
  emailTouched = false;
  /** Wurde das Nachrichtenfeld bereits verlassen? */
  messageTouched = false;

  /** Übersetzte Texte der Komponente. */
  translations = {
    de: {
      title: 'Kontakt',
      description: 'Du hast ein spannendes Projekt, ein Jobangebot oder möchtest dich einfach austauschen? Ich bin immer offen für neue Herausforderungen, kreative Web-Lösungen und Möglichkeiten, gemeinsam Großes zu bewegen. Schreib mir gerne!',
      emailLabel: 'E-Mail:',
      phoneLabel: 'Tel:',
      cta: 'Lass uns zusammenarbeiten!',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'Deine E-Mail',
      messagePlaceholder: 'Deine Nachricht',
      privacyText: "Ich habe die ",
      privacyLink: 'Datenschutzerklärung',
      privacyEnd: ' gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      sendBtn: 'Senden',
      successMessage: 'Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.',
      sending: 'Wird gesendet …',
      errorMessageSend: 'Das hat leider nicht geklappt. Bitte versuche es später erneut oder schreib mir direkt per E-Mail.',
      errorName: 'Bitte gib deinen vollständigen Namen ein (Vor- und Nachname, nur Buchstaben).',
      errorEmail: 'Bitte gib eine gültige E-Mail-Adresse ein (z. B. name@domain.de).',
      errorMessage: 'Bitte gib eine gültige Nachricht ein (mindestens 10 Zeichen, echter Text).'
    },
    en: {
      title: 'Contact me',
      description: 'Got a project in mind, a potential job opportunity, or just want to connect? I am always open to discussing new challenges, creative web solutions, or ways we can collaborate to add value to your team. Feel free to reach out!',
      emailLabel: 'E-mail:',
      phoneLabel: 'Tel:',
      cta: 'Let us work together!',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      privacyText: "I've read the ",
      privacyLink: 'privacy policy',
      privacyEnd: ' and agree to the processing of my data as outlined.',
      sendBtn: 'Send',
      successMessage: 'Thank you! Your message has been sent successfully.',
      sending: 'Sending …',
      errorMessageSend: 'Sorry, something went wrong. Please try again later or email me directly.',
      errorName: 'Please enter your full name (first and last name, letters only).',
      errorEmail: 'Please enter a valid email address (e.g., name@domain.com).',
      errorMessage: 'Please enter a valid message (min. 10 chars, actual text).'
    }
  };

  /**
   * Erstellt das Formular mit allen Validatoren.
   * @param fb FormBuilder zum Aufbau des Formulars.
   */
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, strictNameValidator()]],
      email: ['', [Validators.required, strictEmailValidator()]],
      message: ['', [Validators.required, strictMessageValidator()]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  /**
   * Liefert die Texte in der aktuell gewählten Sprache.
   * @returns Das Übersetzungsobjekt der aktuellen Sprache.
   */
  get t() {
    return this.translations[this.lang];
  }

  /**
   * Merkt sich, dass ein Feld verlassen wurde, damit erst dann Fehler angezeigt werden.
   * @param field Name des Feldes (name, email oder message).
   */
  onBlur(field: string): void {
    if (field === 'name') this.nameTouched = true;
    if (field === 'email') this.emailTouched = true;
    if (field === 'message') this.messageTouched = true;
  }

  /** Validiert das Formular und startet bei gültigen Eingaben den Versand. */
  onSubmit(): void {
    this.markAllTouched();
    if (this.contactForm.invalid || this.isSending) return;
    this.isSending = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.sendMail();
  }

  /** Markiert alle Felder als berührt, damit alle Fehlermeldungen sichtbar werden. */
  private markAllTouched(): void {
    this.nameTouched = true;
    this.emailTouched = true;
    this.messageTouched = true;
    this.contactForm.markAllAsTouched();
  }

  /** Sendet die Formulardaten per POST an das PHP-Skript (Timeout: 10 Sekunden). */
  private sendMail(): void {
    const { name, email, message } = this.contactForm.value;
    this.http
      .post(this.mailEndpoint, { name, email, message })
      .pipe(timeout(10000))
      .subscribe({
        next: () => this.onSendSuccess(),
        error: (err) => this.onSendError(err)
      });
  }

  /** Zeigt die Erfolgsmeldung an und setzt das Formular zurück. */
  private onSendSuccess(): void {
    this.isSending = false;
    this.submitSuccess = true;
    this.resetForm();
    setTimeout(() => (this.submitSuccess = false), 5000);
  }

  /**
   * Zeigt die Fehlermeldung an.
   * @param err Fehler des Versands.
   */
  private onSendError(err?: unknown): void {
    console.error('Mail senden fehlgeschlagen:', err);
    this.isSending = false;
    this.submitError = true;
    setTimeout(() => (this.submitError = false), 8000);
  }

  /** Setzt Formular und Fehlerstatus auf den Anfangszustand zurück. */
  private resetForm(): void {
    this.contactForm.reset({ name: '', email: '', message: '', privacy: false });
    this.nameTouched = false;
    this.emailTouched = false;
    this.messageTouched = false;
  }
}
