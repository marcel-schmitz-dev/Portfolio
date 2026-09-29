import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, Header, Footer],
  templateUrl: './legal-notice.html',
  styleUrls: ['./legal-notice.scss']
})
export class LegalNotice {
  currentLang: 'de' | 'en' = 'en';

  translations = {
    de: {
      subtitle: 'FRONTEND DEVELOPER',
      whyMe: 'Warum ich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt',
      
      legalTitle: 'Impressum',
      imprint: 'Angaben gemäß § 5 TMG',
      acceptanceTitle: 'Nutzungsbedingungen',
      acceptanceText: 'Durch den Zugriff auf und die Nutzung dieses Portfolios erklären Sie sich mit den folgenden Geschäftsbedingungen einverstanden...',
      scopeTitle: 'Geltungsbereich und Eigentum',
      scopeText1: 'Dieses Portfolio wurde für professionelle Präsentations- und Bildungszwecke entwickelt.',
      scopeText2: 'Das Design und der Code dieses Portfolios sind Eigentum von Marcel Schmitz. Unerlaubte Vervielfältigung ist untersagt.',
      rightsTitle: 'Urheberrecht',
      rightsText: 'Ich behalte mir alle Urheberrechte an diesem Portfolio und den dazugehörigen Materialien vor.',
      useTitle: 'Nutzung des Produkts',
      useText: 'Dieses Portfolio ist nur für rechtmäßige Zwecke zu verwenden.',
      disclaimerTitle: 'Haftungsausschluss',
      disclaimerText: 'Dieses Portfolio wird "wie besehen" ohne jegliche ausdrückliche oder implizite Garantie bereitgestellt.',
      indemnityTitle: 'Freistellung',
      indemnityText: 'Sie erklären sich damit einverstanden, den Autor schadlos zu halten.',
      questions: 'Bei Fragen kontaktieren Sie mich unter:',
      date: 'Datum: 29. September 2026'
    },
    en: {
      subtitle: 'FRONTEND DEVELOPER',
      whyMe: 'Why me',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      
      legalTitle: 'Legal Notice',
      imprint: 'Imprint',
      acceptanceTitle: 'Acceptance of terms',
      acceptanceText: 'By accessing and using this portfolio, you acknowledge and agree to the following terms and conditions...',
      scopeTitle: 'Scope and ownership of the product',
      scopeText1: 'This portfolio has been developed for professional presentation and educational purposes.',
      scopeText2: 'The design and code of this portfolio are owned by Marcel Schmitz. Unauthorized use, reproduction, modification, distribution, or replication of the design or content is strictly prohibited.',
      rightsTitle: 'Proprietary rights',
      rightsText: 'I retain all proprietary rights in this portfolio, including any associated copyrighted material, trademarks, and other proprietary information.',
      useTitle: 'Use of the product',
      useText: 'This portfolio is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations.',
      disclaimerTitle: 'Disclaimer of warranties and limitation of liability',
      disclaimerText: 'This portfolio is provided "as is" without warranty of any kind, whether express or implied...',
      indemnityTitle: 'Indemnity',
      indemnityText: 'You agree to indemnify, defend and hold harmless the site owner and author from and against any claim...',
      questions: 'For any questions or notices, please contact me at',
      date: 'Date: September 29, 2026'
    }
  };

  get t() {
    return this.translations[this.currentLang];
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'de' ? 'en' : 'de';
  }
}