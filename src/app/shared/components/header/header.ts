import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

/** Navigationsleiste mit Links zu den Abschnitten und Sprachumschalter. */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  /** Aktuell gewählte Sprache. */
  @Input() currentLang: 'de' | 'en' = 'en';
  /** Übersetzte Texte der Navigation. */
  @Input() t: any;
  /** Wird ausgelöst, wenn der Sprachumschalter geklickt wird. */
  @Output() langChange = new EventEmitter<void>();

  /**
   * @param router Router für die Navigation zwischen den Seiten.
   * @param document Dokument für den Zugriff auf die Abschnitte.
   */
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /** Meldet dem Elternelement, dass die Sprache gewechselt werden soll. */
  onToggleLanguage(): void {
    this.langChange.emit();
  }

  /** Scrollt nach oben bzw. navigiert zur Startseite. */
  onLogoClick(): void {
    this.navigateToSection('');
  }

  /**
   * Scrollt zu einem Abschnitt der Startseite und wechselt bei Bedarf zuerst die Seite.
   * @param sectionId ID des Zielabschnitts; leer für den Seitenanfang.
   */
  navigateToSection(sectionId: string): void {
    const currentPath = this.router.url.split('#')[0];
    if (currentPath === '/' || currentPath === '') {
      this.scrollTo(sectionId);
      return;
    }
    this.router.navigate(['/']).then(() => {
      setTimeout(() => this.scrollTo(sectionId), 150);
    });
  }

  /**
   * Scrollt zum Seitenanfang oder zum angegebenen Abschnitt.
   * @param sectionId ID des Zielabschnitts; leer für den Seitenanfang.
   */
  private scrollTo(sectionId: string): void {
    if (sectionId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.scrollToElement(sectionId);
    }
  }

  /**
   * Scrollt weich zum Element mit der angegebenen ID.
   * @param sectionId ID des Zielelements.
   */
  private scrollToElement(sectionId: string): void {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}