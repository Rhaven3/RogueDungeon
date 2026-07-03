import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterForm } from './encounter-form';

describe('EncounterForm', () => {
  let component: EncounterForm;
  let fixture: ComponentFixture<EncounterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncounterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
