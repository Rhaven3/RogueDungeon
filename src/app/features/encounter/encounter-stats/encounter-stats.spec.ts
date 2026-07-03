import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterStats } from './encounter-stats';

describe('EncounterStats', () => {
  let component: EncounterStats;
  let fixture: ComponentFixture<EncounterStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterStats]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterStats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
