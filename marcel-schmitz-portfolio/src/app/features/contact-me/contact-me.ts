import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function strictNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const nameRegex = /^[a-zA-ZäöüÄÖÜß\s-]+$/;
    const isValid = nameRegex.test(value) && value.trim().length > 0;
    return isValid ? null : { invalidName: true };
  };
}

export function strictMessageValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
    const isLongEnough = value.trim().length >= 10;
    const hasLetters = /[a-zA-ZäöüÄÖÜß]{3,}/.test(value);
    return (isLongEnough && hasLetters) ? null : { invalidMessage: true };
  };
}

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  @Input() lang: 'de' | 'en' = 'en';
  
  contactForm: FormGroup;
  isSubmitted = false;
  submitSuccess = false;

  nameTouched = false;
  emailTouched = false;
  messageTouched = false;

  translations = {
    de: {
      title: 'Kontakt',
      description: 'Du hast ein spannendes Projekt, ein Jobangebot oder möchtest dich einfach austauschen? Ich bin immer offen für neue Herausforderungen, kreative Web-Lösungen und Möglichkeiten, gemeinsam Großes zu bewegen. Schreib mir gerne!',
      emailLabel: 'E-Mail:',
      phoneLabel: 'Tel:',
      namePlaceholder: 'Dein Name',
      emailPlaceholder: 'Deine E-Mail',
      messagePlaceholder: 'Deine Nachricht',
      privacyText: "Ich habe die ",
      privacyLink: 'Datenschutzerklärung',
      privacyEnd: ' gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      sendBtn: 'Senden',
      successMessage: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
      errorName: 'Bitte geben Sie einen gültigen Namen ein (keine Zahlen/Sonderzeichen).',
      errorEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein (z.B. name@domain.de).',
      errorMessage: 'Bitte geben Sie eine gültige Nachricht ein (min. 10 Zeichen, echter Text).'
    },
    en: {
      title: 'Contact me',
      description: 'Got a project in mind, a potential job opportunity, or just want to connect? I am always open to discussing new challenges, creative web solutions, or ways we can collaborate to add value to your team. Feel free to reach out!',
      emailLabel: 'E-mail:',
      phoneLabel: 'Tel:',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      privacyText: "I've read the ",
      privacyLink: 'privacy policy',
      privacyEnd: ' and agree to the processing of my data as outlined.',
      sendBtn: 'Send',
      successMessage: 'Thank you! Your message has been sent successfully.',
      errorName: 'Please enter a valid name (no numbers or special characters).',
      errorEmail: 'Please enter a valid email address (e.g., name@domain.com).',
      errorMessage: 'Please enter a valid message (min. 10 chars, actual text).'
    }
  };

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, strictNameValidator()]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, strictMessageValidator()]],
      privacy: [false, [Validators.requiredTrue]]
    });
  }

  get t() {
    return this.translations[this.lang];
  }

  onBlur(field: string) {
    if (field === 'name') this.nameTouched = true;
    if (field === 'email') this.emailTouched = true;
    if (field === 'message') this.messageTouched = true;
  }

  onSubmit() {
    this.nameTouched = true;
    this.emailTouched = true;
    this.messageTouched = true;
    this.isSubmitted = true;
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.submitSuccess = true;
      console.log(this.contactForm.value);

      setTimeout(() => {
        this.contactForm.reset();
        this.nameTouched = false;
        this.emailTouched = false;
        this.messageTouched = false;
        this.isSubmitted = false;
        this.submitSuccess = false;
      }, 5000);
    }
  }
}