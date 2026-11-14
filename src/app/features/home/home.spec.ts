import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';

/** Unit-Tests für Home. */
describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
