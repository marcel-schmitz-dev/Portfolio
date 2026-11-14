import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Teamplayer } from './teamplayer';

/** Unit-Tests für Teamplayer. */
describe('Teamplayer', () => {
  let component: Teamplayer;
  let fixture: ComponentFixture<Teamplayer>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teamplayer],
    }).compileComponents();

    fixture = TestBed.createComponent(Teamplayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
