import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegalNotice } from './legal-notice';

/** Unit-Tests für LegalNotice. */
describe('LegalNotice', () => {
  let component: LegalNotice;
  let fixture: ComponentFixture<LegalNotice>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotice],
    }).compileComponents();

    fixture = TestBed.createComponent(LegalNotice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
