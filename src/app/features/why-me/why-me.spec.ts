import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyMe } from './why-me';

/** Unit-Tests für WhyMe. */
describe('WhyMe', () => {
  let component: WhyMe;
  let fixture: ComponentFixture<WhyMe>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMe],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
