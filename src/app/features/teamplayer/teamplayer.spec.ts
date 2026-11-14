import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Teamplayer } from './teamplayer';

describe('Teamplayer', () => {
  let component: Teamplayer;
  let fixture: ComponentFixture<Teamplayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teamplayer],
    }).compileComponents();

    fixture = TestBed.createComponent(Teamplayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
