import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

/** Unit-Tests für Footer. */
describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
