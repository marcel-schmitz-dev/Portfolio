import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() lang: 'de' | 'en' = 'en';

  translations = {
    de: {
      legalNotice: 'Legal notice',
      copyright: '© Marcel Schmitz 2026'
    },
    en: {
      legalNotice: 'Legal notice',
      copyright: '© Marcel Schmitz 2026'
    }
  };

  get t() {
    return this.translations[this.lang];
  }
}