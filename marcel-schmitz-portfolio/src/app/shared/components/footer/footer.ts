import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  @Input() lang: 'de' | 'en' = 'en';

  translations = {
    de: {
      legalNotice: 'Impressum',
      copyright: '© Marcel Schmitz 2026'
    },
    en: {
      legalNotice: 'Legal Notice',
      copyright: '© Marcel Schmitz 2026'
    }
  };

  get t() {
    return this.translations[this.lang];
  }
}