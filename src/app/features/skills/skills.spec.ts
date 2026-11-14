import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skills } from './skills';

/** Unit-Tests für Skills. */
describe('Skills', () => {
  let component: Skills;
  let fixture: ComponentFixture<Skills>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
    }).compileComponents();

    fixture = TestBed.createComponent(Skills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
