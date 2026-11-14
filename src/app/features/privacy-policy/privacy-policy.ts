import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { LanguageService } from '../../shared/services/language.service';

/** Ein Abschnitt der Datenschutzerklärung mit Überschrift und Absätzen. */
interface PolicySection {
  title: string;
  paragraphs: string[];
}

/** Seite mit der Datenschutzerklärung in Deutsch und Englisch. */
@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './privacy-policy.html',
  styleUrls: ['../legal-notice/legal-notice.scss']
})
export class PrivacyPolicy {
  /** Zentraler Dienst für die gewählte Sprache. */
  private language = inject(LanguageService);

  /**
   * Gibt die aktuelle Sprache zurück.
   * @returns Die aktive Sprache.
   */
  get currentLang(): 'de' | 'en' {
    return this.language.lang;
  }

  /** Texte der Navigation. */
  nav = {
    de: { whyMe: 'Warum ich', skills: 'Fähigkeiten', projects: 'Projekte', contact: 'Kontakt' },
    en: { whyMe: 'Why me', skills: 'Skills', projects: 'Projects', contact: 'Contact' }
  };

  /** Seitentitel in beiden Sprachen (mit Trennhilfe für schmale Bildschirme). */
  title = { de: 'Datenschutz\u00ADerklärung', en: 'Privacy Policy' };
  /** Stand der Datenschutzerklärung. */
  date = { de: 'Stand: November 2026', en: 'Last updated: November 2026' };

  /** Alle Abschnitte der Datenschutzerklärung je Sprache. */
  sections: Record<'de' | 'en', PolicySection[]> = {
    de: [
      {
        title: 'Verantwortlicher',
        paragraphs: [
          'Marcel Schmitz, Von-Agris-Straße 39, 41844 Wegberg, E-Mail: kontakt@mschmitz-dev.de'
        ]
      },
      {
        title: 'Hosting und Server-Logfiles',
        paragraphs: [
          'Diese Website sowie meine Projekt-Subdomains (byterunner.mschmitz-dev.de, join.mschmitz-dev.de) werden bei IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, gehostet. Beim Aufruf der Seite werden automatisch Daten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Seite und Browsertyp in Server-Logfiles gespeichert. Das ist technisch notwendig, um die Seite auszuliefern und sicher zu betreiben (Art. 6 Abs. 1 lit. f DSGVO). Mit IONOS besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO. Die Logfiles werden nach kurzer Zeit automatisch gelöscht.'
        ]
      },
      {
        title: 'Kontaktformular',
        paragraphs: [
          'Wenn du das Kontaktformular nutzt, werden dein Name, deine E-Mail-Adresse und deine Nachricht per E-Mail an mich übermittelt; der Versand läuft über den Mailserver meines Hosters IONOS. Ich verwende diese Daten nur, um deine Anfrage zu beantworten (Art. 6 Abs. 1 lit. b bzw. lit. a DSGVO). Die Daten werden gelöscht, sobald sie für diesen Zweck nicht mehr benötigt werden. Mit dem Häkchen im Formular bestätigst du, dass du diese Erklärung gelesen hast.'
        ]
      },
      {
        title: 'Projekt „Join“ und Datenbank (Supabase)',
        paragraphs: [
          'Das verlinkte Projekt „Join“ (join.mschmitz-dev.de) ist eine Demo-Anwendung und speichert Kontakte und Aufgaben in einer Datenbank von Supabase (Supabase, Inc., 970 Toa Payoh North, #07-04, Singapore 318992). Beim Nutzen von Join werden die von dir eingegebenen Daten (z. B. Namen, E-Mail-Adressen, Telefonnummern, Aufgaben) und technische Verbindungsdaten wie die IP-Adresse an Supabase übertragen und dort gespeichert (Art. 6 Abs. 1 lit. f DSGVO, Zweck: Bereitstellung der Demo). Mit Supabase besteht ein Vertrag zur Auftragsverarbeitung (DPA) nach Art. 28 DSGVO. Eine Übermittlung in Drittländer kann nicht ausgeschlossen werden; sie erfolgt auf Grundlage der Standardvertragsklauseln. Bitte gib in Join keine echten personenbezogenen Daten Dritter ein. Auf diesem Portfolio selbst wird keine Datenbank verwendet.'
        ]
      },
      {
        title: 'Schriftarten',
        paragraphs: [
          'Die auf dieser Seite verwendeten Schriftarten „Anta“ und „Josefin Sans“ sind lokal auf dem Server gespeichert und werden von dort ausgeliefert. Es wird keine Verbindung zu Servern von Google oder anderen Drittanbietern aufgebaut, und deine IP-Adresse wird dafür nicht an Dritte übermittelt.'
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
          'Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO). Erteilte Einwilligungen kannst du jederzeit widerrufen. Außerdem hast du das Recht, dich bei der zuständigen Datenschutz-Aufsichtsbehörde zu beschweren. Schreib mir dazu einfach an kontakt@mschmitz-dev.de.'
        ]
      }
    ],
    en: [
      {
        title: 'Controller',
        paragraphs: [
          'Marcel Schmitz, Von-Agris-Straße 39, 41844 Wegberg, Germany, email: kontakt@mschmitz-dev.de'
        ]
      },
      {
        title: 'Hosting and server log files',
        paragraphs: [
          'This website and my project subdomains (byterunner.mschmitz-dev.de, join.mschmitz-dev.de) are hosted by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. When you visit the site, data such as your IP address, date and time, the requested page and your browser type is automatically stored in server log files. This is technically necessary to deliver the site and keep it secure (Art. 6(1)(f) GDPR). A data processing agreement under Art. 28 GDPR is in place with IONOS. The log files are deleted automatically after a short time.'
        ]
      },
      {
        title: 'Contact form',
        paragraphs: [
          'If you use the contact form, your name, email address and message are sent to me by email; delivery runs through the mail server of my hosting provider IONOS. I only use this data to answer your request (Art. 6(1)(b) or (a) GDPR). The data is deleted as soon as it is no longer needed for that purpose. By ticking the box in the form, you confirm that you have read this policy.'
        ]
      },
      {
        title: 'Project “Join” and database (Supabase)',
        paragraphs: [
          'The linked project “Join” (join.mschmitz-dev.de) is a demo application that stores contacts and tasks in a Supabase database (Supabase, Inc., 970 Toa Payoh North, #07-04, Singapore 318992). When you use Join, the data you enter (e.g. names, email addresses, phone numbers, tasks) and technical connection data such as your IP address are transmitted to and stored by Supabase (Art. 6(1)(f) GDPR, purpose: providing the demo). A data processing agreement (DPA) under Art. 28 GDPR is in place with Supabase. Transfers to third countries cannot be ruled out; they are based on standard contractual clauses. Please do not enter real personal data of third parties in Join. This portfolio itself does not use a database.'
        ]
      },
      {
        title: 'Fonts',
        paragraphs: [
          'The fonts “Anta” and “Josefin Sans” used on this site are stored locally on the server and delivered from there. No connection to Google or other third-party servers is made, and your IP address is not transmitted to third parties for this purpose.'
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
          'You have the right to access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR). You can withdraw any consent at any time. You also have the right to lodge a complaint with the competent data protection supervisory authority. To exercise your rights, just write to kontakt@mschmitz-dev.de.'
        ]
      }
    ]
  };

  /**
   * Liefert die Navigationstexte in der aktuellen Sprache.
   * @returns Die Navigationstexte.
   */
  get t() {
    return this.nav[this.currentLang];
  }

  /** Wechselt zwischen Deutsch und Englisch. */
  toggleLanguage(): void {
    this.language.toggle();
  }
}
