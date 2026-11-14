import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';

export type Lang = 'de' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private document = inject(DOCUMENT);
  private current: Lang = 'en';

  get lang(): Lang {
    return this.current;
  }

  set lang(value: Lang) {
    this.current = value;
    this.document.documentElement.lang = value;
  }

  toggle(): void {
    this.lang = this.current === 'de' ? 'en' : 'de';
  }
}
