import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { LanguageService } from '../../shared/services/language.service';

interface PolicySection {
  title: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrls: ['../legal-notice/legal-notice.scss']
})
export class PrivacyPolicy {
  private language = inject(LanguageService);

  get currentLang(): 'de' | 'en' {
    return this.language.lang;
  }

  nav = {
    de: { whyMe: 'Warum ich', skills: 'Fähigkeiten', projects: 'Projekte', contact: 'Kontakt' },
    en: { whyMe: 'Why me', skills: 'Skills', projects: 'Projects', contact: 'Contact' }
  };

  title = { de: 'Datenschutzerklärung', en: 'Privacy Policy' };
  date = { de: 'Stand: November 2026', en: 'Last updated: November 2026' };

  sections: Record<'de' | 'en', PolicySection[]> = {
    de: [
      {
        title: 'Verantwortlicher',
        paragraphs: [
          'Marcel Schmitz, [Straße und Hausnummer], [PLZ und Ort], E-Mail: m.schmitz.dev@gmail.com'
        ]
      },
      {
        title: 'Hosting und Server-Logfiles',
        paragraphs: [
          'Diese Website wird bei [Name des Hosting-Anbieters] gehostet. Beim Aufruf der Seite werden automatisch Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browsertyp in Server-Logfiles gespeichert. Das ist technisch notwendig, um die Seite auszuliefern und sicher zu betreiben (Art. 6 Abs. 1 lit. f DSGVO). Die Logfiles werden nach kurzer Zeit automatisch gelöscht.'
        ]
      },
      {
        title: 'Kontaktformular',
        paragraphs: [
          'Wenn du das Kontaktformular nutzt, werden dein Name, deine E-Mail-Adresse und deine Nachricht per E-Mail an mich übermittelt. Ich verwende diese Daten nur, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. lit. a DSGVO). Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr benötigt werden. Mit dem Häkchen im Formular bestätigst du, dass du diese Erklärung gelesen hast.'
        ]
      },
      {
        title: 'Schriftarten (Google Fonts)',
        paragraphs: [
          'Diese Seite lädt die Schriftarten „Anta“ und „Josefin Sans“ von Google Fonts. Dabei wird deine IP-Adresse an Server von Google übertragen (Art. 6 Abs. 1 lit. f DSGVO).'
        ]
      },
      {
        title: 'Externe Links',
        paragraphs: [
          'Diese Website enthält Links zu GitHub und LinkedIn. Beim Anklicken gelten die Datenschutzbestimmungen der jeweiligen Anbieter. Ich nutze keine Tracking- oder Analyse-Tools und setze keine Cookies.'
        ]
      },
      {
        title: 'Deine Rechte',
        paragraphs: [
          'Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Erteilte Einwilligungen kannst du jederzeit widerrufen. Außerdem hast du das Recht, dich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren. Schreib mir dazu einfach an m.schmitz.dev@gmail.com.'
        ]
      }
    ],
    en: [
      {
        title: 'Controller',
        paragraphs: [
          'Marcel Schmitz, [street and house number], [postcode and city], email: m.schmitz.dev@gmail.com'
        ]
      },
      {
        title: 'Hosting and server log files',
        paragraphs: [
          'This website is hosted by [name of hosting provider]. When you visit the site, data such as your IP address, date and time, the requested page and your browser type is automatically stored in server log files. This is technically necessary to deliver the site and keep it secure (Art. 6(1)(f) GDPR). The log files are deleted automatically after a short time.'
        ]
      },
      {
        title: 'Contact form',
        paragraphs: [
          'If you use the contact form, your name, email address and message are sent to me by email. I only use this data to answer your request (Art. 6(1)(b) or (a) GDPR). The data is deleted as soon as it is no longer needed for that purpose. By ticking the box in the form, you confirm that you have read this policy.'
        ]
      },
      {
        title: 'Fonts (Google Fonts)',
        paragraphs: [
          'This site loads the fonts “Anta” and “Josefin Sans” from Google Fonts. In doing so, your IP address is transmitted to Google servers (Art. 6(1)(f) GDPR).'
        ]
      },
      {
        title: 'External links',
        paragraphs: [
          'This website contains links to GitHub and LinkedIn. When you click them, the privacy policies of the respective providers apply. I do not use any tracking or analytics tools and I do not set cookies.'
        ]
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You have the right to access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR). You can withdraw any consent at any time. You also have the right to lodge a complaint with the competent data protection supervisory authority. To exercise your rights, just write to m.schmitz.dev@gmail.com.'
        ]
      }
    ]
  };

  get t() {
    return this.nav[this.currentLang];
  }

  toggleLanguage(): void {
    this.language.toggle();
  }
}
