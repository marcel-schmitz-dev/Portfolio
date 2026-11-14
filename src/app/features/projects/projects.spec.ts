import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Projects } from './projects';

/** Unit-Tests für Projects. */
describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
