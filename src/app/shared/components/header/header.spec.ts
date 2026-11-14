import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

/** Unit-Tests für Header. */
describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  /** Richtet das Testmodul ein und erzeugt die Komponente. */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  /** Prüft, dass die Komponente erstellt werden kann. */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
